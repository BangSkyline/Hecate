'use client';

import Link from 'next/link';
import ScoreCard from './ScoreCard';
import SoilHealthCard from './SoilHealthCard';
import PredictionCard from './PredictionCard';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex flex-col pt-20"
      style={{
        backgroundImage: `url('hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 flex-1 flex items-center justify-center py-16">
        <div className="w-full max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Protégez vos cultures. Réinventez l'agriculture.<br />
            Rejoignez Cosmos.Corp
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Cosmos utilise l'IA pour permettre aux agriculteurs de prédire les dangers 
            météorologiques et d'optimiser leurs rendements grâce à des analyses prédictives des sols, du terrain et de leurs champs.
          </p>
          
          <Link
            target="_blank"
            className="inline-flex items-center px-8 py-4 bg-red-800 hover:bg-red-900 text-white font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer" href={''}          >
            Nous agissons pour inventer l'agriculture de demain
          </Link>
        </div>
      </div>

      <div className="relative z-10 pb-12">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-6">
            <ScoreCard />
            <SoilHealthCard />
            <PredictionCard />
          </div>
        </div>
      </div>
    </section>
  );
}