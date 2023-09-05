import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../db/dbConnect";
import NoticeModel from "../../../../models/NoticeSchema/NoticeSchema";

export async function POST(request) {
  try {
    const { title, description } = await request.json();

    // Connect to MongoDB
    await connectMongoDB();

    // Create a new report card document
    await NoticeModel.create({
      title,
      description,
    });

    return NextResponse.json({ message: "Notice Added" }, { status: 201 });
  } catch (error) {
    console.error("Error adding Notice:", error);
    return NextResponse.json(
      { message: "Error adding Notice" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    await connectMongoDB();
    const notice = await NoticeModel.find();
    return NextResponse.json({ notice });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching Notice", error },
      { status: 500 }
    );
  }
}
