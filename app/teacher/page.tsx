"use client";
import { useState } from "react";

export default function TeacherPage() {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [activeTab, setActiveTab] = useState("students");

  const grades = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];
  
  const students = [
    { id: 1, name: "Thabo Mokoena", grade: "Grade 8", email: "thabo.mokoena@ssg.net" },
    { id: 2, name: "Jane Smith", grade: "Grade 8", email: "jane.smith@ssg.net" },
    { id: 3, name: "Bob Johnson", grade: "Grade 8", email: "bob.johnson@ssg.net" },
    { id: 4, name: "Alice Brown", grade: "Grade 9", email: "alice.brown@ssg.net" },
    { id: 5, name: "Charlie Wilson", grade: "Grade 9", email: "charlie.wilson@ssg.net" },
  ];

  const pendingApprovals = [
    { id: 1, student: "Mike Williams", grade: "Grade 8", date: "2026-07-14" },
    { id: 2, student: "Sarah Davis", grade: "Grade 9", date: "2026-07-13" },
  ];

  const filteredStudents = selectedGrade ? students.filter(s => s.grade === selectedGrade) : students;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e8edf5]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-[#003057] text-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold">Teacher Portal</h1>
              <p className="text-blue-200">Welcome back, Mr. Smith</p>
              <p className="text-blue-300 text-sm">Mathematics Department • Grade 8-10</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="bg-[#ed8936] text-white px-4 py-2 rounded-full text-sm font-semibold">12 Students</div>
              <div className="w-12 h-12 bg-[#C41230] rounded-full flex items-center justify-center font-bold text-xl">MS</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow p-4 text-center"><div className="text-2xl font-bold text-[#003057]">{students.length}</div><div className="text-sm text-gray-600">Total Students</div></div>
          <div className="bg-white rounded-xl shadow p-4 text-center"><div className="text-2xl font-bold text-[#ed8936]">{grades.length}</div><div className="text-sm text-gray-600">Grades</div></div>
          <div className="bg-white rounded-xl shadow p-4 text-center"><div className="text-2xl font-bold text-green-600">{pendingApprovals.length}</div><div className="text-sm text-gray-600">Pending Approvals</div></div>
          <div className="bg-white rounded-xl shadow p-4 text-center"><div className="text-2xl font-bold text-[#C41230]">12</div><div className="text-sm text-gray-600">Materials Uploaded</div></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="border-b border-gray-200 p-4">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setActiveTab("students")} className={`px-6 py-3 rounded-lg font-medium transition ${activeTab === "students" ? "bg-[#003057] text-white" : "text-gray-600 hover:bg-gray-100"}`}>👨‍🎓 Students</button>
              <button onClick={() => setActiveTab("upload")} className={`px-6 py-3 rounded-lg font-medium transition ${activeTab === "upload" ? "bg-[#003057] text-white" : "text-gray-600 hover:bg-gray-100"}`}>📤 Upload Materials</button>
              <button onClick={() => setActiveTab("reports")} className={`px-6 py-3 rounded-lg font-medium transition ${activeTab === "reports" ? "bg-[#003057] text-white" : "text-gray-600 hover:bg-gray-100"}`}>📄 Report Cards</button>
              <button onClick={() => setActiveTab("behavior")} className={`px-6 py-3 rounded-lg font-medium transition ${activeTab === "behavior" ? "bg-[#003057] text-white" : "text-gray-600 hover:bg-gray-100"}`}>📝 Behavior</button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === "students" && (
              <div>
                <h2 className="text-xl font-semibold text-[#003057] mb-4">Student Management</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Filter by Grade</label>
                  <select
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    className="w-full md:w-64 p-3 border rounded-lg focus:ring-2 focus:ring-[#003057] outline-none"
                  >
                    <option value="">All Grades</option>
                    {grades.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  {filteredStudents.map((s) => (
                    <div key={s.id} className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition bg-white">
                      <div>
                        <div className="font-semibold">{s.name}</div>
                        <div className="text-sm text-gray-500">{s.email}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">{s.grade}</span>
                        <button className="text-[#003057] hover:text-[#C41230] transition text-sm font-medium">View →</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "upload" && (
              <div>
                <h2 className="text-xl font-semibold text-[#003057] mb-4">Upload Learning Materials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border-2 border-dashed rounded-xl">
                    <h3 className="font-semibold mb-4 text-[#003057]">📚 Grade-wide Material</h3>
                    <div className="space-y-3">
                      <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#003057] outline-none"><option>Select Grade</option>{grades.map(g => <option key={g}>{g}</option>)}</select>
                      <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#003057] outline-none"><option>Select Subject</option><option>Mathematics</option><option>English</option><option>Natural Sciences</option><option>History</option></select>
                      <input type="text" placeholder="Title" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#003057] outline-none" />
                      <input type="file" accept=".pdf" className="w-full p-2 border rounded-lg" />
                      <button className="w-full bg-[#003057] text-white py-3 rounded-lg hover:bg-[#C41230] transition font-semibold">Upload to Grade</button>
                    </div>
                  </div>
                  <div className="p-6 border-2 border-dashed rounded-xl">
                    <h3 className="font-semibold mb-4 text-[#003057]">👤 Individual Student</h3>
                    <div className="space-y-3">
                      <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#003057] outline-none"><option>Select Student</option>{students.map(s => <option key={s.id}>{s.name}</option>)}</select>
                      <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#003057] outline-none"><option>Select Subject</option><option>Mathematics</option><option>English</option><option>Natural Sciences</option><option>History</option></select>
                      <input type="text" placeholder="Title" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#003057] outline-none" />
                      <input type="file" accept=".pdf" className="w-full p-2 border rounded-lg" />
                      <button className="w-full bg-[#ed8936] text-white py-3 rounded-lg hover:bg-[#d4792e] transition font-semibold">Upload for Student</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reports" && (
              <div>
                <h2 className="text-xl font-semibold text-[#003057] mb-4">Upload Report Cards</h2>
                <div className="p-6 border-2 border-dashed rounded-xl text-center">
                  <div className="text-4xl mb-3">📄</div>
                  <h3 className="font-semibold mb-2 text-[#003057]">Drag & drop report cards here</h3>
                  <p className="text-sm text-gray-500 mb-4">or click to browse PDF files</p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <select className="p-3 border rounded-lg focus:ring-2 focus:ring-[#003057] outline-none"><option>Select Student</option>{students.map(s => <option key={s.id}>{s.name}</option>)}</select>
                    <select className="p-3 border rounded-lg focus:ring-2 focus:ring-[#003057] outline-none"><option>Select Term</option><option>Term 1</option><option>Term 2</option><option>Term 3</option></select>
                    <input type="file" accept=".pdf" className="p-2 border rounded-lg" />
                    <button className="bg-[#003057] text-white px-6 py-3 rounded-lg hover:bg-[#C41230] transition font-semibold">Upload Report</button>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50">
                    <span className="font-medium">Thabo Mokoena - Mathematics - Term 1 2026</span>
                    <span className="text-sm text-gray-500">Uploaded: 2026-03-15</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50">
                    <span className="font-medium">Thabo Mokoena - English - Term 1 2026</span>
                    <span className="text-sm text-gray-500">Uploaded: 2026-03-14</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "behavior" && (
              <div>
                <h2 className="text-xl font-semibold text-[#003057] mb-4">Add Behavior Report</h2>
                <div className="space-y-4">
                  <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#003057] outline-none"><option>Select Student</option>{students.map(s => <option key={s.id}>{s.name}</option>)}</select>
                  <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#003057] outline-none"><option>Severity</option><option>Positive</option><option>Minor</option><option>Major</option></select>
                  <textarea 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#003057] outline-none" 
                    rows={4} 
                    placeholder="Describe the behavior in detail..."
                  />
                  <button className="bg-[#003057] text-white px-8 py-3 rounded-lg hover:bg-[#C41230] transition font-semibold">Save Behavior Report</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}