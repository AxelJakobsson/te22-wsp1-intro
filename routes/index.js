import express from "express";

const router = express.Router();

router.get("/test1", (req, res) => {
  res.send("Hello World!");
});

router.get("/", (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  console.log(name);
  res.render("index.njk", {
    message: `Hej, ${name}`,
    title: "Hem",
    items: ["A", "B", "C", "D"],
  });
});

router.get("/watch", (req, res) => {
  const movieID = req.query.v;
  console.log(movieID);

  const movies = {
    tt011161: {
      title: "The Shawshank Redemption",
      year: 1994,
    },
    tt011162: {
      title: "Film",
      year: 2008,
    },
  };
  const movie = movies[movieID];
  console.log(movie);

  res.render("watch.njk", {
    title: "Watch",
    movie: movie,
  });
});

router.get("/om", (req, res) => {
  res.render("om.njk", {
    message: "Om sidan",
    title: "Om hemsidan",
  });
});

router.get("/test", (req, res) => {
  res.render("test.njk", {
    message: "Test",
    title: "Test",
  });
});

router.get("/readme", (req, res) => {
  console.log(req);
  res.json({
    message: "Hello world!",
  });
});

router.get("/ytub", (req, res) => {
  const ID = req.query.v;

  console.log(ID);
  res.render("ytub.njk", {
    title: "Youtube",
    youtubeID: ID,
  });
});

export default router;
