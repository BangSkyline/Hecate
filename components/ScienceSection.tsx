
'use client';

import Link from 'next/link';

export default function ScienceSection() {
  const countries = [
    'Côte d\'Ivoire', 'Brésil', 'États-Unis', 'Canada', 'Turquie',
    'Nicaragua', 'Argentine', 'Egypte', 'Australie', 'Écosse',
    'Pérou', 'France', 'Roumanie', 'Espagne', 'Grèce', 'Portugal', 'Italie'
  ];

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url('science.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-4">
            Science
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            L'IA au service de l'agriculture
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Notre technologie d'intelligence artificielle combine données satellitaires, 
            capteurs IoT et modèles météorologiques pour des prédictions d'une précision inégalée.
          </p>
          <Link
            target="_blank"
            className="inline-flex items-center px-8 py-4 bg-red-800 hover:bg-red-900 text-white font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer" href={''}          >
            ⏬ Nos Technologies ⏬
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="mb-6">
              <div 
                className="w-full h-48 rounded-xl mb-4"
                style={{
                  backgroundImage: `url('echentillons.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h3 className="text-xl font-semibold mb-3">Analyses d'échantillons de sol</h3>
              <p className="text-gray-300">
                Nous analysons vos sols en partenariat avec les meilleurs agro-ingenieurs et laboratoires, pour atteindre un précision jamais vue.
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="mb-6">
              <div 
                className="w-full h-48 rounded-xl mb-4"
                style={{
                  backgroundImage: `url('drone.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h3 className="text-xl font-semibold mb-3">Détection par satellite</h3>
              <p className="text-gray-300">
                Détection des risques météo et environnementaux pour anticiper et éviter les désatres.
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="mb-6">
              <div 
                className="w-full h-48 rounded-xl mb-4"
                style={{
                  backgroundImage: `url('stats.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <h3 className="text-xl font-semibold mb-3">Données et RGPD</h3>
              <p className="text-gray-300">
                Vos données sont collectées, mais jamais réutilisées. Nous nous conformons au RGPD. Ainsi, nous n'utilisons vos données uniquement pour entrainer nos modèles et assurer une couverture 360°. 
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {countries.map((country, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm"
              >
                {country}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
