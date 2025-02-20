const http = require("http");
const fs = require("node:fs");
const path = require("path");

const port = 8080;

const server = http.createServer((req, res) => {
  // if req.url == '/', return index.html, else return the req url (prepended with the dirname)
  const filePath = path.join(
    __dirname,
    req.url == "/" ? "index.html" : req.url
  );
  const extName = String(path.extname(filePath)).toLowerCase();

  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
  };

  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404: File not found brooo!");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
