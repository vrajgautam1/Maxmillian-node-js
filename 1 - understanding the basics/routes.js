const fs = require("fs");

function dataHandler(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === "/form" || url === "/form/") {
        res.write(`<!doctype html>
            <html lang="en">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Bootstrap demo</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
              </head>
              <body>
                <h1>Hello, world!</h1>

                <form action="message" method="POST" >
                    <div class="mb-3">
                      <label for="ipEmail" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="ipEmail" name="ipEmail">
                    </div>

                    <div class="mb-3">
                      <label for="ipPassword" class="form-label">Password</label>
                      <input type="password" class="form-control" id="ipPassword" name="ipPassword">
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
              </body>
            </html>`);
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });

        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const parsedParams = new URLSearchParams(parsedBody);
            let dataStr = "";
            const email = parsedParams.get("ipEmail");
            dataStr += email + " ";
            const password = parsedParams.get("ipPassword");
            dataStr += password;

            fs.writeFile("message.txt", dataStr, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }

    res.setHeader("Content-Type", "text/html");
    res.write(`<!doctype html>
            <html lang="en">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Bootstrap demo</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
              </head>
              <body>
                <h1>Hello, and welcome to homepage!</h1>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
              </body>
            </html>`);
    res.end();
}

// module.exports = {
//     handler:dataHandler,
//     someText: "Hello, world!"
// };

// module.exports.handler = dataHandler;
// module.exports.someText = "Hello, world!";

exports.handler = dataHandler
exports.someText = "hello world!"