import express, { Router } from "express";

import nunjucks from "nunjucks";

import morgan from "morgan";

import indexRouter from './routes/index.js'

const app = express();

const PORT = process.env.PORT || 3000;

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use('/', indexRouter)

app.use(express.static("public"));
app.use(morgan("dev"));




app.use((req, res) => {
//  res.status(404).send('404 - Not found')
    res.status(404).render('404.njk', {
    title: '404 - Not found',
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
