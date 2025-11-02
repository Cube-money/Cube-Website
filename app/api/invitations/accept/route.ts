import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const authHeader = request.headers.get('Authorization');
    
    console.log("🔄 Proxying invitation accept request to backend...");
    
    if (!authHeader) {
      return NextResponse.json(
        { error: "Authorization header required" },
        { status: 401 }
      );
    }

    // Forward the request to your actual backend
    const response = await fetch("https://cube-service-788967711773.us-central1.run.app/api/invitations/accept", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authHeader,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    console.log("📥 Backend response:", response.status);

    // Return the response from your backend
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    console.error("❌ Proxy error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

