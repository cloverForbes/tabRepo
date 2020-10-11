const express = require("express");
const mongoose = require("mongoose");
const routes = require("./server/routres");


const uri = "mongodb+srv://admin:raZnEa688J5VfVqc@cluster0.fe2zi.mongodb.net/banjotabs?retryWrites=true&w=majority\n"
mongoose
    .connect(uri, {useNewUrlParser: true})
    .then(() => {
        const app = express();
        app.use(express.json());
        app.use("/api", routes);

        app.listen(8080, () => {
            console.log("BanjoTabs running")
        });
    })