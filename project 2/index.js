const express = require('express');
const { connectMongoDb } = require("./connection")

const { logReqRes } = require("./middlewares")

const userRouter = require("./routes/user")

const app = express();
const PORT = 3000;

// Connection to MongoDB
connectMongoDb("mongodb://127.0.0.1:27017/fristDb")
// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(logReqRes("log.txt"))

app.use("/api/users", userRouter)

app.listen(PORT, () => {
   console.log(`server is started at ${PORT}`)
})



