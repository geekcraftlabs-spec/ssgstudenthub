"use client";
import { useState } from "react";
import Link from "next/link";

export default function ParentPage() {
  const [activeTab, setActiveTab] = useState("reports");

  // Same reports as student - consistent with Thabo Mokoena
  const reports = [
    { id: 1, title: "Mathematics - Term 1 2026", term: "Term 1", grade: "78%", date: "2026-03-15", subject: "Mathematics", comment: "Good progress, keep practicing algebra." },
    { id: 2, title: "English - Term 1 2026", term: "Term 1", grade: "82%", date: "2026-03-14", subject: "English", comment: "Excellent essay writing skills." },
    { id: 3, title: "Natural Sciences - Term 1 2026", term: "Term 1", grade: "75%", date: "2026-03-12", subject: "Natural Sciences", comment: "Good understanding of scientific concepts." },
    { id: 4, title: "Mathematics - Term 2 2026", term: "Term 2", grade: "84%", date: "2026-06-20", subject: "Mathematics", comment: "Great improvement in geometry." },
    { id: 5, title: "English - Term 2 2026", term: "Term 2", grade: "86%", date: "2026-06-18", subject: "English", comment: "Excellent work in literature analysis." },
  ];

  const behavior = [
    { id: 1, date: "2026-07-15", description: "Excellent participation in class discussions. Showed great understanding of complex algebraic concepts.", severity: "Positive", teacher: "Mr. Smith" },
    { id: 2, date: "2026-07-10", description: "Arrived 10 minutes late to class. Disruption was minimal and the student apologized.", severity: "Minor", teacher: "Mrs. Johnson" },
    { id: 3, date: "2026-07-05", description: "Helped a fellow student understand the lesson material. Demonstrated leadership and empathy.", severity: "Positive", teacher: "Mr. Smith" },
  ];

  const subjects = [
    { name: "Mathematics", grade: "84%", teacher: "Mr. Smith", status: "Improving" },
    { name: "English", grade: "86%", teacher: "Mrs. Johnson", status: "Excellent" },
    { name: "Natural Sciences", grade: "79%", teacher: "Ms. Brown", status: "Good" },
    { name: "History", grade: "71%", teacher: "Mr. Davis", status: "Needs Focus" },
  ];

  const getGradeColor = (grade) => {
    const num = parseInt(grade);
    if (num >= 80) return "text-green-600";
    if (num >= 70) return "text-blue-600";
    if (num >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e8edf5]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-[#003057] text-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold">Parent Portal</h1>
              <p className="text-blue-200">Welcome back, Mr. & Mrs. Mokoena</p>
              <p className="text-blue-300 text-sm">Viewing: Thabo Mokoena • Grade 8A</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="bg-[#ed8936] text-white px-4 py-2 rounded-full text-sm font-semibold">85% Average</div>
              <div className="w-12 h-12 bg-[#C41230] rounded-full flex items-center justify-center font-bold text-xl">TM</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow p-4 text-center"><div className="text-2xl font-bold text-[#003057]">{reports.length}</div><div className="text-sm text-gray-600">Report Cards</div></div>
          <div className="bg-white rounded-xl shadow p-4 text-center"><div className="text-2xl font-bold text-[#ed8936]">{subjects.length}</div><div className="text-sm text-gray-600">Subjects</div></div>
          <div className="bg-white rounded-xl shadow p-4 text-center"><div className="text-2xl font-bold text-green-600">85%</div><div className="text-sm text-gray-600">Average Grade</div></div>
          <div className="bg-white rounded-xl shadow p-4 text-center"><div className="text-2xl font-bold text-[#C41230]">{behavior.filter(b => b.severity === "Positive").length}</div><div className="text-sm text-gray-600">Positive Reports</div></div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="border-b border-gray-200 p-4">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setActiveTab("reports")} className={`px-6 py-3 rounded-lg font-medium transition ${activeTab === "reports" ? "bg-[#003057] text-white" : "text-gray-600 hover:bg-gray-100"}`}>📄 Report Cards</button>
              <button onClick={() => setActiveTab("behavior")} className={`px-6 py-3 rounded-lg font-medium transition ${activeTab === "behavior" ? "bg-[#003057] text-white" : "text-gray-600 hover:bg-gray-100"}`}>📝 Behavior</button>
              <button onClick={() => setActiveTab("subjects")} className={`px-6 py-3 rounded-lg font-medium transition ${activeTab === "subjects" ? "bg-[#003057] text-white" : "text-gray-600 hover:bg-gray-100"}`}>📚 Subject Performance</button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === "reports" && (
              <div>
                <h2 className="text-xl font-semibold text-[#003057] mb-4">Your Child's Report Cards</h2>
                {reports.map((r) => (
                  <div key={r.id} className="border rounded-xl p-4 mb-3 hover:shadow-md transition bg-white">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div><div className="font-semibold">{r.title}</div><div className="text-sm text-gray-500">{r.subject} • {r.date}</div></div>
                      <div className="flex items-center gap-4"><span className={`text-2xl font-bold ${getGradeColor(r.grade)}`}>{r.grade}</span><span className="text-sm text-gray-500">{r.term}</span><button className="text-[#003057] hover:text-[#C41230] transition border border-[#003057] hover:border-[#C41230] px-4 py-2 rounded-lg text-sm">View →</button></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "behavior" && (
              <div>
                <h2 className="text-xl font-semibold text-[#003057] mb-4">Behavior Reports</h2>
                {behavior.map((b) => (
                  <div key={b.id} className="p-4 border rounded-xl mb-3 hover:shadow-md transition bg-white">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className={`w-3 h-3 rounded-full ${b.severity === "Positive" ? "bg-green-500" : "bg-orange-500"}`}></span>
                      <span className="font-medium">{b.date}</span>
                      <span className={`text-sm px-3 py-1 rounded-full ${b.severity === "Positive" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>{b.severity}</span>
                      <span className="text-sm text-gray-500">Reported by: {b.teacher}</span>
                    </div>
                    <p className="text-gray-700">{b.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "subjects" && (
              <div>
                <h2 className="text-xl font-semibold text-[#003057] mb-4">Subject Performance</h2>
                {subjects.map((s) => (
                  <div key={s.name} className="flex items-center justify-between p-4 border rounded-xl mb-3 hover:shadow-md transition bg-white">
                    <div><div className="font-semibold">{s.name}</div><div className="text-sm text-gray-500">Teacher: {s.teacher}</div></div>
                    <div className="flex items-center gap-4">
                      <span className={`text-xl font-bold ${getGradeColor(s.grade)}`}>{s.grade}</span>
                      <span className={`text-sm px-3 py-1 rounded-full ${s.status === "Excellent" ? "bg-green-100 text-green-700" : s.status === "Improving" ? "bg-blue-100 text-blue-700" : s.status === "Good" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>{s.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
