"use client";
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    window.location.href = "https://sandtonschoolgroup.vercel.app/login";
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a365d] mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting to login...</p>
        <Link href="/" className="text-blue-600 hover:underline block mt-4">← Return Home</Link>
      </div>
    </div>
  );
}
