const http = require("http");

const server = http.createServer(function (req, res) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
    "Access-Control-Max-Age": 2592000,
  };

  if (req.url === "/") {
    res.writeHead(200, { ...headers, "Content-Type": "application/json" });
    res.write("Home Page");
    res.end();
  } else if (req.url === "/users" && req.method === "GET") {
    res.writeHead(200, { ...headers, "Content-Type": "application/json" });
    res.write("Users Page");
    res.end();
  } else if (req.url === "/json" && req.method === "GET") {
    res.writeHead(200, {
      ...headers,
      "Content-Type": "application/json",
    });
    res.write(JSON.stringify({ data: "Users Page" }));
    res.end();
  } else if (req.url === "/users" && req.method === "POST") {
    req.on("data", (chunk) => {
      res.writeHead(200, { ...headers, "Content-Type": "application/json" });
      res.write(chunk.toString());
      res.end();
    });
  }
});

server.listen(8000, () => {
  console.log("Listening on port 8000");
});
