const { mongoose, Schema } = require("mongoose");

let todoSchema = mongoose.Schema(
  {
    imageUrl: String,
    name: String,
    description: String,
    complete: { type: Boolean, default: false },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
