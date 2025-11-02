"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TestAuth() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [currentToken, setCurrentToken] = useState<string | null>(null);
  const [inviteToken, setInviteToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setCurrentToken(storedToken);
  }, []);

  const handleSetToken = () => {
    if (token.trim()) {
      localStorage.setItem("authToken", token.trim());
      setCurrentToken(token.trim());
      alert("Auth token saved!");
    }
  };

  const handleClearToken = () => {
    localStorage.removeItem("authToken");
    setCurrentToken(null);
    setToken("");
    alert("Auth token cleared!");
  };

  const handleTestInvitation = () => {
    if (inviteToken.trim()) {
      router.push(`/invitations/accept?token=${inviteToken.trim()}`);
    } else {
      alert("Please enter an invite token");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Auth Testing Page
          </h1>
          <p className="text-gray-600 mb-8">
            Use this page to test authentication and invitation flows
          </p>

          {/* Current Token Status */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
            <h2 className="font-semibold text-gray-900 mb-2">Current Auth Status</h2>
            {currentToken ? (
              <div>
                <p className="text-sm text-green-600 mb-2">✓ Authenticated</p>
                <p className="text-xs text-gray-600 font-mono break-all bg-white p-2 rounded">
                  {currentToken}
                </p>
              </div>
            ) : (
              <p className="text-sm text-red-600">✗ Not authenticated</p>
            )}
          </div>

          {/* Set Auth Token */}
          <div className="mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">Set Auth Token</h2>
            <p className="text-sm text-gray-600 mb-3">
              Enter a test auth token or your actual JWT token from the backend
            </p>
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Enter auth token..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none mb-3"
            />
            <div className="flex gap-3">
              <button
                onClick={handleSetToken}
                className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Set Token
              </button>
              <button
                onClick={handleClearToken}
                className="flex-1 bg-red-600 text-white font-semibold py-3 rounded-xl hover:bg-red-700 transition-colors"
              >
                Clear Token
              </button>
            </div>
          </div>

          {/* Test Invitation */}
          <div className="mb-8 pt-8 border-t border-gray-200">
            <h2 className="font-semibold text-gray-900 mb-3">Test Invitation Flow</h2>
            <p className="text-sm text-gray-600 mb-3">
              Enter an invite token to test the invitation acceptance page
            </p>
            <input
              type="text"
              value={inviteToken}
              onChange={(e) => setInviteToken(e.target.value)}
              placeholder="Enter invite token..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none mb-3"
            />
            <button
              onClick={handleTestInvitation}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all"
            >
              Go to Invitation Page
            </button>
          </div>

          {/* Quick Actions */}
          <div className="pt-8 border-t border-gray-200">
            <h2 className="font-semibold text-gray-900 mb-3">Quick Actions</h2>
            <div className="space-y-2">
              <button
                onClick={() => router.push("/")}
                className="w-full bg-gray-100 text-gray-700 font-medium py-3 rounded-xl hover:bg-gray-200 transition-colors"
              >
                ← Back to Home
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-2">💡 Testing Tips</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Set an auth token first before testing invitations</li>
              <li>Use a real JWT token from your backend for actual testing</li>
              <li>Check browser console for API responses</li>
              <li>This page is for development only - remove in production!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

