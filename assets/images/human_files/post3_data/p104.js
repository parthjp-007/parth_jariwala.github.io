function post(t){if(t.source===parent&&t.origin===location.protocol+"//"+location.hostname&&"string"==typeof t.data){var o=t.data.indexOf(":"),a=t.data.substr(0,o),n=t.data.substr(o+1);"ddg"===a&&(parent.window.location.href=n)}}window.addEventListener&&window.addEventListener("message",post,!1);