const express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.send("Helloo jiiii")
})
app.get('/about', (req, res) => {
    res.send("about page hai bhai")
})

app.listen(3000)