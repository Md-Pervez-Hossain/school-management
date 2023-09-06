import { models, model, Schema } from "mongoose";
const RoutuneSchema = new Schema(
  {
    studentClass: {
      type: String,
      required: true,
    },
    studentImage: {
      type: String,
      required: true,
    },
    studentName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    villageName: {
      type: String,
      required: true,
    },
    postName: {
      type: String,
      required: true,
    },
    upozillaName: {
      type: String,
      required: true,
    },
    zillaName: {
      type: String,
      required: true,
    },
    parentPhoneNumber: {
      type: String,
      required: true,
    },
    roleNumber: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
const StudentGalleryModel =
  models.studentGallery || model("studentGallery", RoutuneSchema);
export default StudentGalleryModel;
