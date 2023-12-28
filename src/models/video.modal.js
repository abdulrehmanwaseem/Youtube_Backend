import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String, //cloudinary Url
      require: [true, "Video is required"],
    },
    thumbnail: {
      type: String, //cloudinary Url
      require: [true, "Video is required"],
    },
    title: {
      type: String,
      require: [true, "Title is required"],
    },
    description: {
      type: String,
      require: [true, "Description is required"],
    },
    duration: {
      type: Number, //cloudinary duration
      require: [true, "duration is required"],
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    videoOwner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
