/*
 *  JSON-RPC Client implementaion in Javascript
 *  Copyright (C) 2009 Jakub Jankiewicz <http://jcubic.pl/me>
 *
 *  Released under the MIT license
 *
 */

var rpc = (function() {
    function rpc(url, id, method, params, success, error, debug) {
        var request  = {
            'version': '1.1', 'method': method,
            'params': params, 'id': id
        };
        if (debug && debug.constructor === Function) {
            debug(request, 'request');
        }
        return $.ajax({
            url: url,
            data: JSON.stringify(request),
            success: function(response, status, jxhr) {
                if (debug && debug.constructor === Function) {
                    debug(response, 'response');
                }
                try {
                    response = JSON.parse(response);
                } catch(e) {
                    response = response.replace(/<[^>]+>/g, '').
                        replace(/^[\n\s]+|[\n\s]+$/g, '');
                    error(jxhr, status, response);
                    return;
                }
                success(response);
            },
            error: error,
            accepts: 'application/json',
            contentType: 'application/json',
            dataType: 'text',
            async: true,
            cache: false,
            //timeout: 1,
            type: 'POST'});
    }
    return function(options) {
        var id = 1;
        function ajax_error(jxhr, status, thrown) {
            if (status != 'abort' || options.errorOnAbort) {
                var message;
                if (!thrown) {
                    if (jxhr.status == 0 && jxhr.statusText == 'error') {
                        message = 'DNS Failure';
                    } else {
                        message = jxhr.status + ' ' + jxhr.statusText;
                    }
                } else {
                    message = thrown;
                }
                message = 'AJAX Error: "' + message + '"';
                if (options.error) {
                    options.error({
                        message: message,
                        code: 300
                    });
                } else {
                    throw message;
                }
            }
        }
        function rpc_wrapper(method) {
            return function(/* args */) {
                var args = Array.prototype.slice.call(arguments);
                return function(continuation) {
                    rpc(options.url, id++, method, args, function(resp) {
                        if (!resp) {
                            var message = "No response from method `" +
                                method + "'";
                            if (options.error) {
                                options.error({
                                    code: 301,
                                    message: message
                                });
                            } else {
                                throw message;
                            }
                        } else {
                            continuation(resp.error, resp.result);
                        }
                    }, ajax_error, options.debug);
                };
            };
        }
        return function(continuation) {
            rpc(options.url, id++, 'system.describe', null, function(response) {
                var message;
                if (!response) {
                    if (options.error) {
                        message = "No response from `system.describe' method";
                        options.error({
                            code: 301,
                            message: message
                        });
                    } else {
                        throw message;
                    }
                } else if (response.error) {
                    if (options.error) {
                        options.error(response.error);
                    } else {
                        throw response.error.message;
                    }
                } else {
                    var service = {};
                    $.each(response.procs, function(i, proc) {
                        service[proc.name] = rpc_wrapper(proc.name);
                        service[proc.name].toString = function() {
                            return "#<rpc-method: `" + proc.name + "'>";
                        };
                    });
                    continuation(service, response);
                }
            }, ajax_error, options.debug);
        };
    };
})();
