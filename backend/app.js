const express = require('express');
const app = express()
const tasks = require('./routes/tasks')

app.get('/', (req, res) => {
    res.send("Task Manager App")
})

app.use('/api/v1/tasks', tasks)

const PORT = 3000

app.listen(PORT, console.log(`server is listing on port ${PORT}...`))