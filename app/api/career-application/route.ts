import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "a0nhkjjj";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

function getWriteClient() {
  return createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const role = String(formData.get("role") || "").trim();

    if (!name || !email || !role) {
      return NextResponse.json(
        { error: "Name, email, and role are required." },
        { status: 400 }
      );
    }

    const client = getWriteClient();
    if (!process.env.SANITY_API_TOKEN) {
      return NextResponse.json(
        { error: "Application service is not configured." },
        { status: 503 }
      );
    }

    const resumeFile = formData.get("resume");
    let resumeField: { _type: "file"; asset: { _type: "reference"; _ref: string } } | undefined;
    let resumeFileName: string | undefined;

    if (resumeFile instanceof File && resumeFile.size > 0) {
      resumeFileName = resumeFile.name;
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      const asset = await client.assets.upload("file", buffer, {
        filename: resumeFile.name,
        contentType: resumeFile.type || "application/octet-stream",
      });
      resumeField = {
        _type: "file",
        asset: { _type: "reference", _ref: asset._id },
      };
    }

    await client.create({
      _type: "careerApplication",
      name,
      email,
      phone: String(formData.get("phone") || "").trim() || undefined,
      location: String(formData.get("location") || "").trim() || undefined,
      role,
      portfolioUrl: String(formData.get("portfolioUrl") || "").trim() || undefined,
      resume: resumeField,
      resumeFileName,
      workMode: String(formData.get("workMode") || "").trim() || undefined,
      yearsOfExperience: String(formData.get("yearsOfExperience") || "").trim() || undefined,
      whyJoin: String(formData.get("whyJoin") || "").trim() || undefined,
      submittedAt: new Date().toISOString(),
      status: "new",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Career application error:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}
