const express = require("express");
const Tab = require("./Models/Tab");
const router = express.Router();
const multer = require("multer");
const fs = require('fs');
const upload = multer();

const path = "./server/tabs/"

router.get("/tabs", async (req, res) => {
    const tabs = await Tab.find();
    res.send(tabs);
})

router.post("/tabs/new", upload.array('tab', 1), async (req,res) => {
    const tabBufffer = req.files[0].buffer;
    const tab = new Tab({
        title: req.body.title,
        composer: req.body.composer,
    });
    fs.writeFile(`${path}${tab._id}.pdf`, tabBufffer, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    })
    await tab.save();
    res.send(tab);

})

router.get("/tabs/:id", async (req, res) => {
    try {
        const tab = await Tab.findOne({
            _id: req.params.id
        })
        res.download(`${path}${tab._id}.pdf`, `${tab.title}.pdf`);
    } catch {
        res.status(404);
        res.send({error: "Tab doesn't exist!"})
    }
})

module.exports = router;