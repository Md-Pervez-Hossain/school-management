import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../db/dbConnect";
import RoutuneModel from "../../../../models/RoutuneSchema/RoutuneSchema";

export async function POST(request) {
  try {
    const { routune, routuneImage } = await request.json();

    // Connect to MongoDB
    await connectMongoDB();

    // Create a new report card document
    await RoutuneModel.create({
      routune,
      routuneImage,
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
    const routune = await RoutuneModel.find();
    return NextResponse.json({ routune });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching Notice", error },
      { status: 500 }
    );
  }
}
