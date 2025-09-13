
'use client';

import Link from 'next/link';

export default function PlatformSection() {
  return (
    <section 
    className="relative min-h-screen flex flex-col pt-20 py-24 bg-gray-50"
      style={{
        backgroundImage: `url('sunrise.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-4">
            Nos Résultats
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            La première utilisation d'IA agricole pour maximiser vos rendements
          </h2>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-8">
            Un système d'intelligence artificielle avancé qui analyse les données météorologiques, les données des sols, 
            prédit les risques et optimise vos décisions en temps réel
          </p>
          <Link
            className="inline-flex items-center px-8 py-4 green-700 hover:bg-green-600 text-white font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer" href={''}          >
            ⏬ Nos résultats parlent pour nous ⏬
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-scales-line text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-3">Prédiction météo IA</h3>
            <p className="text-gray-100">
              Algorithmes d'apprentissage automatique analysant 50+ sources de données météorologiques 
              pour des prévisions ultra-précises jusqu'à 30 jours à l'avance.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-3">Optimisation des rendements</h3>
            <p className="text-gray-100">
              L'IA analyse vos données historiques et conditions actuelles pour recommander 
              les meilleures stratégies d'irrigation, fertilisation et récolte.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-bar-chart-line text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-3">Alertes intelligentes</h3>
            <p className="text-gray-100">
              Notifications proactives sur les risques météorologiques imminents avec 
              recommandations d'actions spécifiques pour protéger vos cultures.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Country Comparison */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Prédictions météorologiques ultra-précises par zone géographique
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-6 bg-blue-600 rounded-sm"></div>
                  <div>
                    <div className="font-medium text-gray-900">Sud-Ouest France</div>
                    <div className="text-sm text-gray-600">Risque orage : 72h</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Alerte</span>
                  <div className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-medium">Alerte</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-6 bg-green-600 rounded-sm"></div>
                  <div>
                    <div className="font-medium text-gray-900">Beauce</div>
                    <div className="text-sm text-gray-600">Conditions optimales</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Optimal</span>
                  <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">Optimal</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Agriculture Comparison */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recommandations IA personnalisées pour maximiser vos rendements
              </h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Irrigation intelligente</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Économie d'eau</span>
                  <span className="text-2xl font-bold text-gray-900">-30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Augmentation rendement</span>
                  <span className="text-2xl font-bold text-gray-900">+15%</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Fertilisation optimisée</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Rendement blé</span>
                  <span className="text-2xl font-bold text-gray-900">8.2t/ha</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">VS Moyenne Régionale</span>
                  <span className="text-2xl font-bold text-gray-900">6.8t/ha</span>
                </div>
                <div className="bg-blue-100 rounded-lg p-3">
                  <div className="text-sm font-medium text-blue-800">Gain IA</div>
                  <div className="text-lg font-bold text-blue-900">+21%</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cover Impact */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Analyse prédictive des risques climatiques par culture
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">!</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Grêle - Maïs</div>
                  <div className="text-sm text-gray-600">Risque élevé dans 48h</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">⚠</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Sécheresse - Tournesol</div>
                  <div className="text-sm text-gray-600">Surveillance renforcée</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Blé - Récolte</div>
                  <div className="text-sm text-gray-600">Fenêtre optimale : 5 jours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
