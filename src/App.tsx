import React from 'react';
import { Sparkles, Camera, MessageSquare, LineChart, Settings } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-900">Caliora</h1>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Sparkles className="w-6 h-6 text-indigo-600" />}
            title="Coping Strategies"
            description="Discover personalized strategies to help you manage stress and anxiety effectively."
          />
          
          <FeatureCard
            icon={<Camera className="w-6 h-6 text-indigo-600" />}
            title="Check Emotion"
            description="Use our emotion recognition tool to better understand your current emotional state."
          />
          
          <FeatureCard
            icon={<MessageSquare className="w-6 h-6 text-indigo-600" />}
            title="Voice Assistant"
            description="Get support through our AI-powered voice assistant, available 24/7."
          />
          
          <FeatureCard
            icon={<LineChart className="w-6 h-6 text-indigo-600" />}
            title="Track Progress"
            description="Monitor your emotional well-being journey with detailed analytics and insights."
          />
          
          <FeatureCard
            icon={<Settings className="w-6 h-6 text-indigo-600" />}
            title="Settings"
            description="Customize your experience and manage your account preferences."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Recommendations</h2>
            <div className="space-y-4">
              <RecommendationItem
                title="Morning Meditation"
                description="Start your day with a 10-minute mindfulness session"
              />
              <RecommendationItem
                title="Breathing Exercise"
                description="Practice deep breathing when feeling overwhelmed"
              />
              <RecommendationItem
                title="Evening Reflection"
                description="Journal about your day's experiences and emotions"
              />
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Goals & Roadmap</h2>
            <div className="space-y-4">
              <GoalItem
                title="Stress Management"
                progress={70}
                description="Learn and practice stress reduction techniques"
              />
              <GoalItem
                title="Emotional Awareness"
                progress={45}
                description="Improve recognition of emotional triggers"
              />
              <GoalItem
                title="Healthy Habits"
                progress={90}
                description="Maintain consistent self-care routines"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-semibold text-indigo-900 ml-3">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function RecommendationItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-l-4 border-indigo-500 pl-4 py-2">
      <h3 className="font-semibold text-indigo-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function GoalItem({ title, progress, description }: { title: string; progress: number; description: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-indigo-900">{title}</h3>
        <span className="text-sm text-indigo-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-indigo-600 rounded-full h-2 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default App;