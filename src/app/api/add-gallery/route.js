import { connectMongoDB } from "../../../../db/dbConnect";
import StudentGalleryModel from "../../../../models/StudentGallerySchema/StudentGallerySchema";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const {
      studentName,
      studentImage,
      studentClass,
      roleNumber,
      fatherName,
      motherName,
      villageName,
      postName,
      upozillaName,
      zillaName,
      parentPhoneNumber,
    } = await request.json();
    // Connect to MongoDB
    await connectMongoDB();
    // Create a new report card document
    await StudentGalleryModel.create({
      studentName,
      studentImage,
      studentClass,
      roleNumber,
      fatherName,
      motherName,
      villageName,
      postName,
      upozillaName,
      zillaName,
      parentPhoneNumber,
    });
    return NextResponse.json({ message: "Gallery Added" }, { status: 201 });
  } catch (error) {
    console.error("Error adding Gallery : ", error);
    return NextResponse.json(
      { message: "Error adding Gallery" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    await connectMongoDB();
    const studentGallery = await StudentGalleryModel.find();
    return NextResponse.json({ studentGallery });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching Student Gallery", error },
      { status: 500 }
    );
  }
}
