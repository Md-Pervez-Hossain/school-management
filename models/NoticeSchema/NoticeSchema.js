import { models, model, Schema } from "mongoose";

const NoticeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const NoticeModel = models.notice || model("notice", NoticeSchema);
export default NoticeModel;
