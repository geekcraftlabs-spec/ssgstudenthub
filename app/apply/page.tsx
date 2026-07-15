"use client";
import { useState } from "react";
import Link from "next/link";

export default function ApplyPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "", dateOfBirth: "", grade: "",
    parentName: "", parentPhone: "", parentEmail: "",
    address: "", email: ""
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    alert("Registration submitted! Check your email for login details.");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-[#1a365d]">School Registration</h1>
            <Link href="/" className="text-blue-600 hover:underline">← Home</Link>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Student Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1">Full Name *</label><input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-3 border rounded" required /></div>
                <div><label className="block text-sm font-medium mb-1">Date of Birth *</label><input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full p-3 border rounded" required /></div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Grade *</label>
                <select name="grade" value={formData.grade} onChange={handleChange} className="w-full p-3 border rounded" required>
                  <option value="">Select Grade</option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                  <option value="Grade 4">Grade 4</option>
                  <option value="Grade 5">Grade 5</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Student Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="student@ssg.net" className="w-full p-3 border rounded" required />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Parent Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1">Parent Name *</label><input type="text" name="parentName" value={formData.parentName} onChange={handleChange} className="w-full p-3 border rounded" required /></div>
                <div><label className="block text-sm font-medium mb-1">Parent Phone *</label><input type="tel" name="parentPhone" value={formData.parentPhone} onChange={handleChange} placeholder="0821234567" className="w-full p-3 border rounded" required /></div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Parent Email *</label>
                <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange} placeholder="parent@example.com" className="w-full p-3 border rounded" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Address *</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="123 Main Street, Sandton" className="w-full p-3 border rounded" required />
            </div>

            <button type="submit" disabled={loading} className="w-full bg-[#1a365d] text-white p-3 rounded-lg hover:bg-[#2b6cb0] disabled:opacity-50">
              {loading ? "Submitting..." : "Register Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
