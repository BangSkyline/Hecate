
'use client';

export default function SolutionsSection() {
  return (
    <section className="relative min-h-screen flex flex-col pt-20"
      style={{
        backgroundImage: `url('hills.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-4">
            Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Relever les grands défis de l'agriculture durable
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Corporate Solutions */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-gray-200">
            <div className="mb-8">
              <div 
                className="w-full h-80 rounded-xl mb-6"
                style={{
                  backgroundImage: `url('worlddark.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
                  POUR LES INDUSTRIELS
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Des approvisionnements durables
                </h3>
                <p className="text-gray-600 mb-6">
                  Découvrez la résilience et l'impact environnemental de vos approvisionnements en matières premières.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  'Obtenez des données d\'impact spécifiques à votre activité',
                  'Créez votre base de référence, identifiez les domaines à améliorer',
                  'Effectuez des projections et suivez vos progrès',
                  'Impliquer vos fournisseurs'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Suppliers Solutions */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <div className="mb-8">
              <div 
                className="w-full h-80 rounded-xl mb-6"
                style={{
                  backgroundImage: `url('worldlight.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
                  POUR LES FOURNISSEURS
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Promouvoir des filières durables
                </h3>
                <p className="text-gray-600 mb-6">
                  Obtenez des niveaux de données sans précédent associés à la production de matières premières.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  'Identifiez le niveau de résilience de vos lignes de production',
                  'Repérer les meilleures pratiques agricoles',
                  'Fournissez à vos clients la meilleure qualité de données',
                  'Impliquez vos producteurs'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
