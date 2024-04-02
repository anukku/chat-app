const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
    res.send("API is running...");
});

const port = process.env.PORT || 5000;
const uri = "mongodb+srv://ciobanww:matei2003@cluster0.reavoil.mongodb.net/chatApp";
console.log(uri);
app.listen(port, (req, res) => {
    console.log(`Server running on port: ${port}`);
});

mongoose
.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(()=>console.log("MongoDB connection established"))
    .catch((error)=> console.log("MongoDB connection fail: ", error.message));