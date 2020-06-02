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
    question: {
        text: {
            type: String,
        },
        answers: [
            {
                title: {
                    type: String,
                },
                right: {
                    type: Boolean,
                    default: false
                }
            }
        ]
    },
    testing: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            try: {
                type: Number,
                default: 1
            },
            score: {
                type: Number,
                default: 0
            }
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