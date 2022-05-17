require("dotenv").config()
const express = require("express")

// const apiRoutes = require("./routes/api.js")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Index page (static HTML)
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/frontend/views/index.html")
})
// Static files for frontend
app.use("/public", express.static(process.cwd() + "/frontend/public"))

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
