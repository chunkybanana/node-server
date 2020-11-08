# node-server

Simple node.js host system.

Cleans requested URL before loading page. 

Manages GET queries, including AJAX. 

Recommended: Use ruby or php to deal with files. Use exec(command,callback). Callback should be function(error, stdout, stderr){(code)}.

Dependecies: Node.js(obviously), child_process, url, http, fs.

This means the whole app can be downloaded as a zip, then initiated from the command line, and accessed in the browser. 
