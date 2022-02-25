const express = require('express')

const app = express()

let orders = [
    {"id": 1, "contents": ["pizza 1"]}
]

app.get("/api/v1/orders", (req, res) => {
    res.send(orders)
})

app.post("/api/v1/orders", (req, res) => {
    let requestOrder = req.body
    //TODO: validate
    orders.push(requestOrder)
    res.status(201)
    res.send({"ID": orders.length})
})

app.listen("3000", () => {console.log("api listening on port 3000")})