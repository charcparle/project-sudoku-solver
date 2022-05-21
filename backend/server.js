require("dotenv").config()
const express = require("express")
const path = require("path");

// const apiRoutes = require("./routes/api.js")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV === "production") {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, "../client/build")))

  app.get("*", (req, res) => {
    res.sendFile(__dirname, "../", "client", "build", "index.html")
  })
} else {
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello there from express" })
  })
}
// Request Logger
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip)
  next()
})

// User routes
app.use("/api/check", require("./routes/check"))
app.use("/api/solve", require("./routes/solve"))

//404 Not Found Middleware
app.use(function (req, res, next) {
  res.status(404).type("text").send("Not Found")
})

// Start server
const PORT = process.env.PORT || 4000
app.listen(PORT, function () {
  console.log("Listening on port " + PORT)
})

module.exports = app // for testing
