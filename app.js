
const express = require('express')
const app = express() 

// localhost:3000
app.get('/', (req, res) => {
    res.json({message: 'Hello World'})
})

app.listen(3000, () => {
    console.log('Server is running...')
})