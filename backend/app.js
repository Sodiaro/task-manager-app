const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send("Task Manager App")
})

const PORT = 3000

app.listen(PORT, console.log(`server is listing on port ${PORT}...`))