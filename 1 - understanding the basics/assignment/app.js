const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!doctype html>
                <html lang="en">
                  <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>Bootstrap demo</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
                  </head>
                  <body class="container">
                    <h1>A list of users!</h1>
                    <ul class="list-group">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
                  </body>
                </html>`);
    res.end();
    return;
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); // e.g., "userName=John"
      const username = new URLSearchParams(parsedBody); // Extract the username
      const theName = username.get("userName")
      console.log(theName)
      res.statusCode = 302; // Redirect to homepage
      res.setHeader("Location", "/");
      res.end();
    });
    return;
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
            <body class="container">
              <h1>Hello, and welcome to the homepage!</h1>
              <form method="POST" action="create-user">
                  <div class="mb-3">
                    <label for="userName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="userName" name="userName">
                  </div>

                  <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </body>
          </html>`);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
