const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator");


const Practic = require('../../models/Practic');
const auth = require("../../middleware/auth");

//@route    POST api/practic
//@desc     Create a new practic
//@access   Private

router.post("/", [
    check("title", "Title id required").not().isEmpty(),
    check("question", "Question is required").not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const newPractic = new Practic({
            title: req.body.title,
            question: req.body.question
        });

        const practic = await newPractic.save();
        res.json(practic);
    } catch(error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//@route    POST api/practic/:id
//@desc     Upload file on server
//@access   Public

router.post("/:id", async (req, res) => {

})

//@route    PUT api/practic/:id
//@desc     Update information about sending file
//@access   Public

router.put("/:id", auth, async (req, res) => {
    try {
        const practic = await Practic.findById(req.params.id);

        /*if(practic.answers.filter((answer) => answer.user.toString() === req.user.id).lenght() > 0) {
            return res.status(400).json({msg: 'Вы уже отправляли решение этого задания'});
        }*/

        practic.answers.unshift({user: req.user.id, file: req.body.file});
        await practic.save();

        res.json(practic.answers)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
})

//@route    GET api/practic
//@desc     Get all practics
//@access   Public

router.get("/",async (req, res) => {
    try  {
        const practics = await Practic.find();
        res.json(practics);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//@route    GET api/practic/:id
//@desc     Get practic by id
//@acces    Public

router.get("/:id", async (req, res) => {
    try {
        //const profile = await Profile.findOne({user: req.params.user_id}).populate("user", ["name"]);
        const practic = await (await Practic.findById(req.params.id).populate('answers.user', 'name'));
        if(!practic) {
            return res.status(404).json({msg: "Thing not found"});
        }

        res.json(practic);
    } catch(error) {
        if(error.kind === "ObjectID") {
            return res.status(404).json({msg: "Thing not found"});
        }
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;