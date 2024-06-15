import { NextRequest, NextResponse } from "next/server";
import Blog from '@/app/models/blog';

export async function GET() {
    const blogs = await Blog.find();
    return new NextResponse(JSON.stringify(blogs), {status: 200})
}

export async function POST(request: NextRequest) {
    const { title, body } = await request.json();
    await Blog.create({ title, body });
    return new NextResponse(JSON.stringify({message: "Blog Created"}),{status: 200})
}