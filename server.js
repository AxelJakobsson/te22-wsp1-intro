import express, { Router } from 'express'

import nunjucks from 'nunjucks'

const app = express()


const PORT = process.env.PORT || 3000


nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.use(express.static ("public"))

app.get("/", (req, res) => {
    res.render("index.njk", {
        message: "Hello World!",
        title: "Hem",
        items: ["A", "B", "C", "D"],
    })
})

app.get("/om", (req, res) => {
    res.render("om.njk", {
        message: "Om sidan",
        title: "Om hemsidan",
    })
})

app.get("/test", (req, res) => {
    res.render("test.njk", {
        message: "Test",
        title: "Test",
    })
})


app.get("/readme", (req, res) => {
    console.log(req)
    res.json({
        message: "Hello world!",
    })
})

  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
