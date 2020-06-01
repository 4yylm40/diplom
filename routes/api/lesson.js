const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator");


const Lesson = require('../../models/Lesson');
const auth = require("../../middleware/auth");

//@route    POST api/lesson
//@desc     Create a new lesson
//@access   Private

router.post("/", [auth, [
    check("title", "Title id required").not().isEmpty(),
    check("video", "Video is required").not().isEmpty(),
    check("theory", "theory is required").not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const newLesson = new Lesson({
            title: req.body.title,
            video: req.body.video,
            theory: req.body.theory,
        });

        const lesson = await newLesson.save();
        res.json(lesson);
    } catch(error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//@route    GET api/lesson
//@desc     Get all lessons
//@access   Public

router.get("/",async (req, res) => {
    try  {
        const lessons = await Lesson.find();
        res.json(lessons);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

//@route    GET api/things/:id
//@desc     Get lesson by id
//@acces    Public

router.get("/:id", async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);

        if(!lesson) {
            return res.status(404).json({msg: "Thing not found"});
        }

        res.json(lesson);
    } catch(error) {
        if(error.kind === "ObjectID") {
            return res.status(404).json({msg: "Thing not found"});
        }
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;