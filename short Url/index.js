const express = require('express');
const path = require('path');
const urlRoutes = require("./routes/url")
const stacticRoute = require("./routes/staticRouter")
const URL = require("./models/url")
const { connectMongoDb } = require("./connect")
const app = express();
const PORT = 3001;


connectMongoDb("mongodb://127.0.0.1:27017/shortUrl")
    .then(() => console.log("Connected to MongoDB"));


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/url", urlRoutes);
app.use("/"	, stacticRoute);

app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
                ip: req.ip,
            }
        }
    });
    res.redirect(entry.redirectedUrl);

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
