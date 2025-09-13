
'use client';

export default function ScoreCard() {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 max-w-sm w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Score de résilience</h3>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <span>Top</span>
          <span className="font-semibold">30%</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center mb-4">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#10b981"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${65 * 2.51} ${100 * 2.51}`}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-gray-800">6.5</span>
            <span className="text-sm font-medium text-green-600">BON</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <span>0</span>
        <span>10</span>
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <div className="w-4 h-4 flex items-center justify-center">
          <i className="ri-arrow-up-line text-green-600"></i>
        </div>
        <span className="text-green-600 font-medium">+0.2</span>
        <span className="text-gray-600">Pts depuis 2021</span>
      </div>
    </div>
  );
}
