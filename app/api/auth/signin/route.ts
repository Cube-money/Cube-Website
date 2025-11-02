import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log("🔄 Proxying signin request to backend...");
    
    // Forward the request to your actual backend
    const response = await fetch("https://cube-service-788967711773.us-central1.run.app/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

