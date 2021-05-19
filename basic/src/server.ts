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
        <div id="root" ></div>
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
  {
    name: "Lisa Simpson",
  },
  {
    name: "Abe Simpson",
  },
  {
    name: "Apu Nahasapeemapetilon",
  },
  {
    name: "Chief Wiggum",
  },
  {
    name: "Krusty",
  },
  {
    name: "Ned Flanders",
  },
  {
    name: "Santa's Little Helper ",
  },
  {
    name: "Principal Seymour Skinner",
  },
];

server.get("/simpsons/:name?", (req: Request, res: Response) => {
  if (req.params.name) {
    res.send(
      simpsons
        .map((character) => ({ name: character.name.toLowerCase() }))
        .filter((character) =>
          character.name.includes(req.params.name.toLowerCase())
        )
    );
  } else {
    res.send(simpsons);
  }
});

server.listen(PORT, function () {
  console.log("server listening on port: " + PORT);
});
