import express, { Request, Response } from "express";
import bodyParser from "body-parser";
let PORT = 4000;
let server: express.Application = express();

const middlewares = [
  express.static("dist"),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
];

server.use(...middlewares);

server.get("/", (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root" >hello world!!</div>
        <script src="bundle.js"></script>
      </body>
    </html>
    `);
});

const simpsons = [
  {
    name: "Bart Simpson",
  },
  {
    name: "Homer Simpson",
  },
  {
    name: "Marge Simpson",
  },
  {
    name: "Maggie Simpson",
  },
];

server.get("/simpsons", (req: Request, res: Response) => {
  res.send(simpsons);
});

server.listen(PORT, function () {
  console.log("server listening on port: " + PORT);
});
