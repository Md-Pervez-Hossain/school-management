import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../db/dbConnect";
import StudentGalleryModel from "../../../../../models/StudentGallerySchema/StudentGallerySchema";
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const singleGallery = await StudentGalleryModel.findOne({ _id: id });
  return NextResponse.json({ singleGallery });
}
