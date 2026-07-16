"use client";
import { useState } from "react";

export default function StudentPage() {
  const [activeTab, setActiveTab] = useState("reports");

  const reports = [
    { id: 1, title: "Mathematics - Term 1 2026", term: "Term 1", grade: "78%", date: "2026-03-15", subject: "Mathematics", comment: "Good progress, keep practicing algebra." },
    { id: 2, title: "English - Term 1 2026", term: "Term 1", grade: "82%", date: "2026-03-14", subject: "English", comment: "Excellent essay writing skills." },
    { id: 3, title: "Natural Sciences - Term 1 2026", term: "Term 1", grade: "75%", date: "2026-03-12", subject: "Natural Sciences", comment: "Good understanding of scientific concepts." },
    { id: 4, title: "Mathematics - Term 2 2026", term: "Term 2", grade: "84%", date: "2026-06-20", subject: "Mathematics", comment: "Great improvement in geometry." },
    { id: 5, title: "English - Term 2 2026", term: "Term 2", grade: "86%", date: "2026-06-18", subject: "English", comment: "Excellent work in literature analysis." },
    { id: 6, title: "Natural Sciences - Term 2 2026", term: "Term 2", grade: "79%", date: "2026-06-16", subject: "Natural Sciences", comment: "Good work on the ecosystem project." },
    { id: 7, title: "History - Term 2 2026", term: "Term 2", grade: "71%", date: "2026-06-14", subject: "History", comment: "Needs to focus more on essay structure." },
  ];

  const materials = [
    { id: 1, title: "Algebra: Linear Equations", subject: "Mathematics", grade: "Grade 8", date: "2026-07-10" },
    { id: 2, title: "Essay Writing: Persuasive Essays", subject: "English", grade: "Grade 8", date: "2026-07-08" },
    { id: 3, title: "Cell Division: Mitosis & Meiosis", subject: "Natural Sciences", grade: "Grade 8", date: "2026-07-05" },
    { id: 4, title: "Geometry: Triangles & Angles", subject: "Mathematics", grade: "Grade 8", date: "2026-06-28" },
    { id: 5, title: "History: World War II", subject: "History", grade: "Grade 8", date: "2026-06-25" },
  ];

  const behavior = [
    { id: 1, date: "2026-07-15", description: "Excellent participation in class discussions. Showed great understanding of complex algebraic concepts.", severity: "Positive", teacher: "Mr. Smith" },
    { id: 2, date: "2026-07-10", description: "Arrived 10 minutes late to class. Disruption was minimal and the student apologized.", severity: "Minor", teacher: "Mrs. Johnson" },
    { id: 3, date: "2026-07-05", description: "Helped a fellow student understand the lesson material. Demonstrated leadership and empathy.", severity: "Positive", teacher: "Mr. Smith" },
  ];

  const tabs = [
    { id: "reports", label: "📄 Report Cards", count: reports.length },
    { id: "materials", label: "📚 Materials", count: materials.length },
    { id: "behavior", label: "📝 Behavior", count: behavior.length },
  ];

  const getGradeColor = (grade: string) => {
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
              <h1 className="text-3xl font-bold">Student Portal</h1>
              <p className="text-blue-200">Welcome back, Thabo Mokoena</p>
              <p className="text-blue-300 text-sm">Grade 8A • Student ID: 2024-0123</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="bg-[#C41230] text-white px-4 py-2 rounded-full text-sm font-semibold">85% Average</div>
              <div className="w-12 h-12 bg-[#ed8936] rounded-full flex items-center justify-center font-bold text-xl">TM</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow p-4 text-center"><div className="text-2xl font-bold text-[#003057]">{reports.length}</div><div className="text-sm text-gray-600">Report Cards</div></div>
          <div className="bg-white rounded-xl shadow p-4 text-center"><div className="text-2xl font-bold text-[#ed8936]">{materials.length}</div><div className="text-sm text-gray-600">Materials</div></div>
          <div className="bg-white rounded-xl shadow p-4 text-center"><div className="text-2xl font-bold text-green-600">8</div><div className="text-sm text-gray-600">Subjects</div></div>
          <div className="bg-white rounded-xl shadow p-4 text-center"><div className="text-2xl font-bold text-[#C41230]">{behavior.filter(b => b.severity === "Positive").length}</div><div className="text-sm text-gray-600">Positive Reports</div></div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="border-b border-gray-200 p-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition ${activeTab === tab.id ? "bg-[#003057] text-white shadow-md" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  {tab.label} <span className="text-sm opacity-75">({tab.count})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {/* Reports Tab */}
            {activeTab === "reports" && (
              <div>
                <h2 className="text-xl font-semibold text-[#003057] mb-4">Academic Report Cards</h2>
                <div className="space-y-4">
                  {reports.map((r) => (
                    <div key={r.id} className="border rounded-xl p-4 hover:shadow-md transition bg-white">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800">{r.title}</div>
                          <div className="text-sm text-gray-500">{r.subject} • {r.date}</div>
                          <div className="text-sm text-gray-600 mt-1 italic">&quot;{r.comment}&quot;</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`text-2xl font-bold ${getGradeColor(r.grade)}`}>{r.grade}</span>
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{r.term}</span>
                          <button className="text-[#003057] hover:text-[#C41230] transition font-medium border border-[#003057] hover:border-[#C41230] px-4 py-2 rounded-lg text-sm">View →</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Materials Tab */}
            {activeTab === "materials" && (
              <div>
                <h2 className="text-xl font-semibold text-[#003057] mb-4">Learning Materials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {materials.map((m) => (
                    <div key={m.id} className="p-4 border rounded-xl hover:shadow-md transition bg-white">
                      <div className="font-semibold text-gray-800">{m.title}</div>
                      <div className="text-sm text-gray-600">{m.subject} • {m.grade}</div>
                      <div className="text-xs text-gray-400 mt-2">{m.date}</div>
                      <button className="mt-2 text-[#003057] hover:text-[#C41230] transition text-sm font-medium">📥 Download</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Behavior Tab */}
            {activeTab === "behavior" && (
              <div>
                <h2 className="text-xl font-semibold text-[#003057] mb-4">Behavior Reports</h2>
                <div className="space-y-4">
                  {behavior.map((b) => (
                    <div key={b.id} className="p-4 border rounded-xl hover:shadow-md transition bg-white">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                          <span className={`w-3 h-3 rounded-full ${b.severity === "Positive" ? "bg-green-500" : "bg-orange-500"}`}></span>
                          <span className="font-medium">{b.date}</span>
                          <span className={`text-sm px-3 py-1 rounded-full ${b.severity === "Positive" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>{b.severity}</span>
                        </div>
                        <span className="text-sm text-gray-500">Reported by: {b.teacher}</span>
                      </div>
                      <p className="mt-2 text-gray-700">{b.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}