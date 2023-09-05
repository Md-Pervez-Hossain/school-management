import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../db/dbConnect";
import NoticeModel from "../../../../../models/NoticeSchema/NoticeSchema";
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const notice = await NoticeModel.findOne({ _id: id });
  return NextResponse.json({ notice });
}
