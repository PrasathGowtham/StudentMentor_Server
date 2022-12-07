require('dotenv').config();
const express = require("express");
const app = express();
const db=require("./db/connect");
const route = require("./routes/route");
const cors = require("cors")
db()
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Welcome to my MyOrg!');
})

app.use("/student",route);










const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});