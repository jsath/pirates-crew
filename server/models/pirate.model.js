const Mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');

const pirateSchema = new Mongoose.Schema(
    {
    name: {
        type: String,
        minLength: [3, 'Name must have more than 3 characters!'],
        required: [true,'Name is required']
    },
    image: {
        type: String,
        required: [true,'Image is required'],
        minLength: [3, "Image must be longer than that!"]
    },
    chests: {
        type: Number, 
        required: [true,'Chest number is required']
    },
    phrase: {
        type: String,
        minLength: [5, 'Catch phrase must have more than 3 characters!'],
        required: [true,'Catch phrase is required']
    },
    position: {
        type: String,
        required: [true,'Position is required'],
        unique: [true, "Each position only has 1 spot!"]
    },
    pegLeg: {
        type: Boolean,
        default: true
    },
    eyePatch: {
        type: Boolean,
        default: true
    },
    hookHand: {
        type: Boolean,
        default: true
    }
    },
    { timestamps: true }
)

pirateSchema.plugin(uniqueValidator, { message: 'That Position is already covered!' });

module.exports = Mongoose.model('pirates', pirateSchema)