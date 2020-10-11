const express = require("express");
const Tab = require("./Models/Tab");
const router = express.Router();

router.get("/tabs", async (req, res) => {
    const tabs = await Tab.find();
    res.send(tabs);
})

router.post("/tabs/new", async (req,res) => {
    console.log(req.body);
    const tab = new Tab({
        title: req.body.title,
        composer: req.body.composer,
        tab: req.body.tab,
    });

    /*await tab.save();
    res.send(tab);*/
    res.send({body: "hi"});
})

router.get("/post/:id", async (req, res) => {
    try {
        const tab = await Tab.findOne({
            _id: req.params.id
        })
        res.send(tab);
    } catch {
        res.status(404);
        res.send({error: "Tab doesn't exist!"})
    }
})

module.exports = router;