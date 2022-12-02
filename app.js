
const express = require('express')
const app = express() 

// pet-listing
app.get('/pet-listing', (req, res) => {
    const model = {
        pageTitle: 'Pets',
        components: [
            {
                type: 'featuredImage',
                data: {
                    imageUrl: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                }
            }
        ]
    }
    res.json(model)
})

app.listen(3000, () => {
    console.log('Server is running...')
})