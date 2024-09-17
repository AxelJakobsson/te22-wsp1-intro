import express, { Router } from "express";

import nunjucks from "nunjucks";

const app = express();

const PORT = process.env.PORT || 3000;

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  console.log(name);
  res.render("index.njk", {
    message: `Hej, ${name}`,
    title: "Hem",
    items: ["A", "B", "C", "D"],
  });
});

app.get("/watch", (req, res) => {
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
    }
  };
  const movie = movies[movieID];
  console.log(movie);

  res.render("watch.njk", {
    title: "Watch",
    movie: movie,
  });
});

app.get("/om", (req, res) => {
  res.render("om.njk", {
    message: "Om sidan",
    title: "Om hemsidan",
  });
});

app.get("/test", (req, res) => {
  res.render("test.njk", {
    message: "Test",
    title: "Test",
  });
});

app.get("/readme", (req, res) => {
  console.log(req);
  res.json({
    message: "Hello world!",
  });
});


app.get('/ytub', (req, res) => {
    const ID = req.query.v
    
    console.log(ID)
    res.render('ytub.njk', {
        title: 'Youtube',
        youtubeID: ID,
    })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
