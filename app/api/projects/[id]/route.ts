import { NextResponse } from "next/server";
import { getProjectById } from "@/lib/projects-db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const projectId = Number(id);

  // Validate the ID
  if (!Number.isInteger(projectId) || projectId <= 0) {
    return NextResponse.json(
      { error: "Invalid project ID" },
      { status: 400 }
    );
  }

  // Find the project
  const project = getProjectById(projectId);

  // Project not found
  if (!project) {
    return NextResponse.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  // Project found
  return NextResponse.json(project);
}