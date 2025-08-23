import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

// ✅ Add Product (POST)
export async function POST(req) {
    try {
        const body = await req.json();

        if (!body.name || !body.description || !body.price || !body.details || !body.image) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const collection = await dbConnect("products");

        const result = await collection.insertOne({
            ...body,
            createdAt: new Date(),
        });

        return NextResponse.json({ success: true, insertedId: result.insertedId });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to add product" },
            { status: 500 }
        );
    }
}

// ✅ Fetch All Products (GET)
export async function GET() {
    try {
        const collection = await dbConnect("products");
        const products = await collection.find({}).toArray();
        return NextResponse.json(products);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}
