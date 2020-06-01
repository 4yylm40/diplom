const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    theory: {
        type: String,
        required: true
    },
    questions: [
        {
            number: {
                type: Number,
                required: true
            },
            question: {
                type: String,
                required: true
            },
            answers: [
                {
                    answer: {
                        type: String,
                        required: true
                    },
                    right: {
                        type: Boolean,
                        default: false
                    }
                }
            ]
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user"
            },
            text: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = Lesson = mongoose.model("lesson", LessonSchema);