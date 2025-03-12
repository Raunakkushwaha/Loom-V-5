import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    image: String,
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Posts", postSchema);
export default PostModel;
