var http = require("http");
var fs = require('fs');

console.log("PORT:", process.env.PORT);

function requestHandler(req, res) {
  console.log("method:", req.method);
  console.log("url:", req.url);
  console.log("headers:", req.headers);

  // var radius = req.url.replace('/', '');
  // console.log(radius);
  // res.write("" + circle.area(radius));
  // res.end();
  var htmlContent = fs.readFileSync('public/index.html');


  // res.statusCode = 200;
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.write(htmlContent);
  res.end();
}

var server = http.createServer(requestHandler);

server.listen(3000, function (err) {
  console.log("Server running on port 3000");
});
