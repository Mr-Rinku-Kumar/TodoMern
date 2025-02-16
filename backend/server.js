const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const routes = require("./routes/TodoRoutes")
require("dotenv").config()
const PORT = process.env.PORT || 5000

const app = express()

//Middleware
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected Successfully")).catch((err) => console.log(err))

app.use("/api", routes)

app.listen(PORT, () => {
    console.log(`listening at ${PORT}`)
})