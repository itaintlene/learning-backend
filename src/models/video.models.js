import mongoose, { Schema } from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        description: {
            type: String,   // cloudinary url
            required: true,
        },
        duration: {
            type: Number,   // cloudinary
            required: true
        },
        views: {
            type: Number,   // cloudinary
            default: 0
        },
        isPublished: {
            type: Boolean,
            required: true, 
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
{timestamps: true})

// this adds a middleware plugin that allows us to write aggregation queries
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model('Video', videoSchema)