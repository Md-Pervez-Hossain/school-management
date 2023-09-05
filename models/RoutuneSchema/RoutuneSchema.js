import { models, model, Schema } from "mongoose";

const RoutuneSchema = new Schema(
  {
    routune: {
      type: String,
      required: true,
    },
    routuneImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const RoutuneModel = models.routune || model("routune", RoutuneSchema);
export default RoutuneModel;
