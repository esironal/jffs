var client = require('./client');

describe('Issues', function() {

    it('should correctly get infos about an issue', function() {
        var repo = client.repo('GitbookIO/gitbook')
        var issue = repo.issue(200);

        return issue.info()
        .then(function(details) {

        });
    });

    it('should correctly list issues for a repository', function() {
        var repo = client.repo('GitbookIO/gitbook')

        return repo.issues()
        .then(function(page) {

        });
    });

});

