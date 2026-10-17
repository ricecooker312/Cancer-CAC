const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/goodbye', (req, res) => {
    res.send("Goodbye")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
//code starts here
