
'use client';

export default function PartnersSection() {
  const partners = [
    'Monster Energy Drinks', 'Nestlé', 'Nespresso', 'Panzzani', 'Dom Pérignon',
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-12">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 h-16 flex items-center justify-center min-w-[200px] opacity-60 hover:opacity-100 transition-opacity"
              >
                <span className="text-2xl font-bold text-gray-600">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
