# Node

Server-side language

Nodejs is a javascript runtime environment + libraries, like libuv (https://libuv.org) or crypto. Nodejs allows JS to work on a server, handling files, performing I/O - things it was not intially designed for. It was initially designed to work in a browser.

`npm` is a package manager for node (but the full form is not node package manager apparently). Helps get packages not shipped natively with nodejs.

## Nginx

Can be used to serve static files. nginx config file is in a directory, it configures the nginx process whose job it is to listen to requests on an open port and return files stored in the directory (index.html and styles.css)
