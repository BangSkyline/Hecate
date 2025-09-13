'use client';

export default function PredictionCard() {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 max-w-sm w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Précision prédictive par l'IA</h3>
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-brain-line text-blue-600"></i>
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
              stroke="#2563eb"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${94 * 2.51} ${100 * 2.51}`}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-gray-800">94</span>
            <span className="text-sm font-medium text-blue-600">%</span>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-3">
        <div className="text-sm text-gray-600">Prédictions météo</div>
        <div className="text-xs text-gray-500">12 Derniers mois</div>
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <div className="w-4 h-4 flex items-center justify-center">
          <i className="ri-arrow-up-line text-blue-600"></i>
        </div>
        <span className="text-blue-600 font-medium">+3%</span>
        <span className="text-gray-600">VS Année précédente</span>
      </div>
    </div>
  );
}