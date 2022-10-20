import express from 'express'

import routes from "./app/routes"

const app = express()

app.use(express.json())

app.use(routes)

app.listen(3332,() => {
    console.log('~ server running on port 3332')
})