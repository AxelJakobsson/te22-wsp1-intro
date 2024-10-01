import express from 'express'

const router = express.Router()

router.get("/", (req, res) => {
    const query = req.query.q || ""
    console.log("Query: ", query)
    
    res.render("calc.njk", {
        title: "Calculator",
        num1,
        num2,
        error: 'Error: Not valid number',
        method, 
    })
})

router.get("/add", (req, res) => {
    if(method == add) { 
    const {num1, num2} = req.query
    const sum = Number(num1) + Number(num2)
    if(Number.isInteger(num1)  == false || Number.isInteger(num2) == false){
        res.send('Error: Not valid number. Check for spaces, special characters and letters.')
    }
    
    else {res.send(`Summan av ${num1} och ${num2} är ${sum}`)}
}
})

router.get("/subtract", (req, res) => {
    const {num1, num2} = req.query
    const sum = Number(num1) - Number(num2)
    if(Number.isInteger(num1)  == false || Number.isInteger(num2) == false){
        res.send('Error: Not valid number. Check for spaces, special characters and letters.')
    }
    else {res.send(`Differensen av ${num1} och ${num2} är ${sum}`)}
})

router.get("/multi", (req, res) => {
    const {num1, num2} = req.query
    const sum = Number(num1) * Number(num2)
    if(Number.isInteger(num1)  == false || Number.isInteger(num2) == false){
        res.send('Error: Not valid number. Check for spaces, special characters and letters.')
    }
    else {
        res.send(`Produkten av ${num1} och ${num2} är ${sum}`)
    }
})

router.get("div", (req, res) => {
    const {num1, num2} = req.query
    const sum = Number(num1) / Number(num2)
    if(Number.isInteger(num1)  == false || Number.isInteger(num2) == false){
        res.send('Error: Not valid number. Check for spaces, special characters and letters.')
    }
    else {
        res.send(`Kvoten av ${num1} och ${num2} är ${sum}`)
    }
})

export default router