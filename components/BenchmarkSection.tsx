'use client';

export default function BenchmarkSection() {
  const crops = [
    { name: 'Vigne', image: 'vigne.jpg' },
    { name: 'Blé', image: 'céréale.jpg' },
    { name: 'Café', image: 'café.jpg' },
    { name: 'Colza', image: 'colza.jpg' },
    { name: 'Betterave', image: 'betterave.jpg' },
    { name: 'Coton', image: 'coton.jpg' },
    { name: 'Tournesol', image: 'tournesol.jpg' },
    { name: 'Bois', image: 'bois.jpg' },
    { name: 'Cacao', image: 'cacao.jpg' },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col pt-20 py-24 bg-gray-50"
      style={{
        backgroundImage: `url('results.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
            Nos agriculteurs et leurs récoltes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos modèles offrent les meilleures performances à nos agriculteurs
          </h2>
          <p className="text-xl text-gray-700 font-bold max-w-4xl mx-auto">
            Nos modèles fine-tunés ont été entraînés pour ces produits.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {crops.map((crop, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 cursor-pointer"
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center font-semibold text-gray-800">{crop.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}