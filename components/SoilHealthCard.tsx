'use client';

export default function SoilHealthCard() {
  const data = [
    { label: 'Critique', range: '0 à 2', value: 3, color: 'bg-red-500' },
    { label: 'Dégradé', range: '2 à 4', value: 9, color: 'bg-orange-500' },
    { label: 'Moyen', range: '4 à 6', value: 15, color: 'bg-yellow-500' },
    { label: 'Bon', range: '6 à 8', value: 51, color: 'bg-green-500' },
    { label: 'Optimal', range: '8 to 10', value: 23, color: 'bg-emerald-500' }
  ];

  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 max-w-sm w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Part des sols en bonne santé</h3>
      
      <div className="mb-6 text-center">
        <div className="flex items-baseline justify-center gap-2 mb-2">
          <span className="text-4xl font-bold text-gray-800">74</span>
          <span className="text-2xl font-medium text-gray-600">%</span>
        </div>
        <p className="text-sm text-gray-600 mb-1">en bonne santé</p>
        <p className="text-xs text-gray-500 mb-3">9.5k de 13,4k ha</p>
        <div className="bg-green-100 rounded-lg p-2">
          <div className="text-2xl font-bold text-green-700">+22%</div>
          <div className="text-xs text-green-600">Amélioration rendements</div>
        </div>
      </div>
      
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex-1">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-xs font-medium text-gray-700 w-6">{item.value}</span>
                <div className="flex-1 flex items-end">
                  <div 
                    className={`${item.color} rounded-sm transition-all duration-700`}
                    style={{ 
                      width: `${(item.value / maxValue) * 100}%`,
                      height: `${Math.max(item.value / 4, 6)}px`
                    }}
                  ></div>
                </div>
              </div>
              <div className="text-xs">
                <div className="font-medium text-gray-700">{item.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}