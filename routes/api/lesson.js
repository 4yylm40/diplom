const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator");


const Lesson = require('../../models/Lesson');
const User = require('../../models/User');
const auth = require("../../middleware/auth");

//@route    POST api/lesson
//@desc     Create a new lesson
//@access   Private

router.post("/", [
    check("title", "Title id required").not().isEmpty(),
    check("video", "Video is required").not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    
    try {
        const newLesson = new Lesson({
            title: req.body.title,
            video: req.body.video,
            theory: req.body.theory,
            question: req.body.question
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

//@route    GET api/lesson/:id
//@desc     Get lesson by id
//@acces    Public

router.get("/:id", async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id).populate('testing.user', 'name');

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

//@route    PUT api/lesson/:id
//@desc     Add or update information about user's testing
//@access   Private

router.put('/:id', auth, async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);
        const user = await User.findById(req.user.id).select("-password");

        if(lesson.testing.filter((user) => user.user.toString() === req.user.id).lenght === 0) {
            lesson.testing.unshift({user: req.user.id, trying: 1, score: req.body.score});
            user.score += req.body.score;

            await lesson.save();
            await user.save();

            res.json(lesson.testing);
        }

        if(lesson.testing.filter((user) => user.user.toString() === req.user.id).lenght > 0) {
            const removeIndex = lesson.testing.map((user) => user.user.toString()).indexOf(req.user.id);
            lesson.testing.splice(removeIndex, 1);
    
            lesson.testing.unshift({user: req.user.id, trying: req.body.trying, score: req.body.score});
            user.score = req.body.score;
    
            await lesson.save();
            await user.save();
    
            res.json(lesson.testing);
        }

        lesson.testing.unshift({user: req.user.id, trying: req.body.trying, score: req.body.score});
        user.score = req.body.score;

        await lesson.save();
        await user.save();

        res.json(lesson.testing);

    } catch(error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;