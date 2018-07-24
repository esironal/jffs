<?php

$index = file_get_contents('./index.html', true);




?>


<!DOCTYPE html>
<html >
  <head>
    <meta charset="UTF-8">
    <title>Edit Index</title>
    

<link rel="stylesheet" href="cmtouch/lib/codemirror.css">
<link rel="stylesheet" href="cmtouch/addon/hint/show-hint.css">
<script src="cmtouch/lib/codemirror.js"></script>
<script src="cmtouch/addon/hint/show-hint.js"></script>
<script src="cmtouch/addon/hint/xml-hint.js"></script>
<script src="cmtouch/addon/hint/html-hint.js"></script>
<script src="cmtouch/mode/xml/xml.js"></script>
<script src="cmtouch/mode/javascript/javascript.js"></script>
<script src="cmtouch/mode/css/css.js"></script>
<script src="cmtouch/mode/htmlmixed/htmlmixed.js"></script>
<script src="cmtouch/addon/selection/active-line.js"></script>
<script src="cmtouch/addon/edit/matchbrackets.js"></script>

<link rel="stylesheet" href="cmtouch/theme/neonsyntax.css">

<style type="text/css">.CodeMirror {font-size:13px; width: 100%,; height: 100%;}</style>
    
    	
    	
    	   
  </head>

    <body>

<!--
<div class="pageContent">
	<form method="post" action="demo/common/ajaxDone.html" class="pageForm required-validate" onsubmit="return validateCallback(this, navTabAjaxDone);">

-->

<textarea id="editor"><?php echo $index; ?></textarea>




<script type="text/javascript">
      CodeMirror.commands.autocomplete = function(cm) {
          CodeMirror.showHint(cm, CodeMirror.hint.html);
      }
      window.onload = function() {
        editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
          mode: "text/html",
          theme: "neonsyntax",
          lineWrapping: true,
          lineNumbers: true,
          styleActiveLine: true,
          matchBrackets: true,
          
          extraKeys: {"Ctrl-Space": "autocomplete"},
          value: ""
        });
      };
    </script>
 


<!--   	
<div class="formBar">
			<ul>
				<li><div class="buttonActive"><div class="buttonContent"><button type="submit">Save</button></div></div></li>
				<li><div class="button"><div class="buttonContent"><button type="button" class="close">Cancel</button></div></div></li>
			</ul>
		</div>
	</form>
</div>


-->
    </body>

</html>