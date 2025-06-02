import React from 'react';
import { Sparkles, Camera, MessageSquare, LineChart, Settings } from 'lucide-react';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-indigo-600">Caliora</h1>
        </div>
        <div className="space-y-2 p-4">
          <NavItem icon={<Sparkles />} text="Coping Strategies" />
          <NavItem icon={<Camera />} text="Check Emotion" />
          <NavItem icon={<MessageSquare />} text="Voice Assistant" />
          <NavItem icon={<LineChart />} text="Track Progress" />
          <NavItem icon={<Settings />} text="Settings" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Recommendations Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
            <div className="space-y-3">
              <p className="text-gray-600">Personalized recommendations will appear here</p>
            </div>
          </div>

          {/* Goals Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Goals</h2>
            <div className="space-y-3">
              <p className="text-gray-600">Your goals and progress will be shown here</p>
            </div>
          </div>

          {/* Roadmaps Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Roadmaps</h2>
            <div className="space-y-3">
              <p className="text-gray-600">Your personalized roadmaps will be displayed here</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a
      href="#"
      className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200"
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{text}</span>
    </a>
  );
}

export default App;