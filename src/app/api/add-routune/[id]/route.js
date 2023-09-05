import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../db/dbConnect";
import RoutuneModel from "../../../../../models/RoutuneSchema/RoutuneSchema";
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const routune = await RoutuneModel.findOne({ _id: id });
  return NextResponse.json({ routune });
}
