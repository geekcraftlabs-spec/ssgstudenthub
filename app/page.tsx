import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#e8edf5]">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#003057] mb-6">Welcome to Your School Portal</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">Access all your school resources in one place. Choose your portal below.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/student"><div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105 p-8 cursor-pointer"><div className="text-5xl mb-4">📚</div><h3 className="text-2xl font-bold text-[#003057]">Student Portal</h3><p className="text-gray-600 mt-2">View report cards, learning materials, and behavior</p></div></Link>
          <Link href="/parent"><div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105 p-8 cursor-pointer"><div className="text-5xl mb-4">👨‍👩‍👦</div><h3 className="text-2xl font-bold text-[#003057]">Parent Portal</h3><p className="text-gray-600 mt-2">Track your child's progress and behavior</p></div></Link>
          <Link href="/teacher"><div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105 p-8 cursor-pointer"><div className="text-5xl mb-4">👨‍🏫</div><h3 className="text-2xl font-bold text-[#003057]">Teacher Portal</h3><p className="text-gray-600 mt-2">Upload reports, materials, and manage students</p></div></Link>
        </div>
      </div>
    </div>
  );
}
