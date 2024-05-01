const express = require("express"),
    app = express(),
    CORS = require("cors"),
    PORT = 3001,
    cookieParser = require('cookie-parser')
require("dotenv").config()
require("./DL/db.js").connect()

app.use(CORS({ origin: 'http://localhost:5173', credentials: true }));
app.use(cookieParser())
app.use(express.json());
app.use("/categories", require("./routes/categories.router.js"));
app.listen(PORT, () => {
    console.log(`\x1b[42m [index.js] server is runing in port ${PORT} \x1b[0m`);
})
