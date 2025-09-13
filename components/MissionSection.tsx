
'use client';

export default function MissionSection() {
  return (
    <section 
      className="py-24 relative"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Dark%20rich%20soil%20close-up%20with%20agricultural%20landscape%20in%20background%2C%20hands%20holding%20fertile%20earth%2C%20sustainable%20farming%20concept%2C%20environmental%20conservation%2C%20natural%20texture%20of%20healthy%20soil%20with%20organic%20matter&width=1920&height=1080&seq=mission001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            L'inconnu et l'incertitude menacent<br />
            vos rendements. L'IA peut vous aider.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <i className="ri-thunderstorms-line text-white text-2xl"></i>
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">€2.4Md</div>
              <div className="text-lg text-white/90">
                de pertes annuelles dues aux événements météorologiques extrêmes en France
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <i className="ri-alert-line text-white text-2xl"></i>
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">-25%</div>
              <div className="text-lg text-white/90">
                de rendement moyen lors d'années climatiquement défavorables
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Notre mission : protéger vos cultures grâce à l'intelligence artificielle prédictive.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-drop-line text-blue-400 text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Prédiction météo IA</h3>
            <div className="text-2xl font-bold text-white mb-1">95%</div>
            <div className="text-sm text-white/70">de précision à 14 jours</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-leaf-line text-green-400 text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Optimisation des rendements</h3>
            <div className="text-2xl font-bold text-white mb-1">+18%</div>
            <div className="text-sm text-white/70">d'augmentation moyenne</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-recycle-line text-purple-400 text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Réduction des risques</h3>
            <div className="text-2xl font-bold text-white mb-1">-40%</div>
            <div className="text-sm text-white/70">de pertes liées à la météo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
