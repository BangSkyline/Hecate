# Plateforme de Résilience Climatique
Une plateforme moderne dédiée à l'analyse de la résilience climatique et à la santé des sols, développée avec Next.js et React.

---

## 🚀 Fonctionnalités
- **Analyse de résilience climatique**
- Évaluation des scores de résilience en temps réel
- **Monitoring de la santé des sols**
- Suivi détaillé de l'état des terres agricoles
- **Prédictions IA**
- Intelligence artificielle pour les prévisions météorologiques
- **Interface moderne**
- Design responsive et intuitif

---

## 🛠️ Technologies utilisées
- **Next.js 15.3.2**
- Framework React pour la production
- **React 19**
- Bibliothèque d'interface utilisateur
- **TypeScript**
- Typage statique pour JavaScript
- **Tailwind CSS**
- Framework CSS utilitaire
- **Recharts**
- Bibliothèque de graphiques pour React

---

## 📋 Prérequis
- Node.js 18+
- npm ou yarn
- Git

---

## 🚀 Installation et démarrage
### Installation des dépendances
```bash
npm install
# ou
yarn install
Démarrage en mode développement
npm run dev
# ou
yarn dev
```
Ouvrez http://localhost:3000 dans votre navigateur pour voir le résultat.

Build de production :
```bash
npm run build
# ou
yarn build
```

---

## 🐳 Déploiement avec Docker
```bash
#Construction de l’image Docker
docker build -t name:version .
#Exécution du conteneur
docker run -p 3000:3000 name:version
```
L’application sera accessible sur http://localhost:3000

---

## 📁 Structure du projet
├── app/                    # Pages de l'application (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants réutilisables
│   ├── Header.tsx         # En-tête de navigation
│   ├── HeroSection.tsx    # Section hero avec cartes
│   ├── MissionSection.tsx # Section mission
│   ├── PartnersSection.tsx# Section partenaires
│   ├── SolutionsSection.tsx# Section solutions
│   ├── BenchmarkSection.tsx# Section benchmarks
│   ├── PlatformSection.tsx# Section plateforme
│   ├── ScienceSection.tsx # Section science
│   ├── ScoreCard.tsx      # Carte de score
│   ├── SoilHealthCard.tsx # Carte santé des sols
│   └── PredictionCard.tsx # Carte prédictions IA
├── public/               # Fichiers statiques
├── package.json          # Dépendances et scripts
└── README.md            # Documentation du projet

---

##🎨 Personnalisation:

Couleurs et thème :
Les couleurs principales peuvent être modifiées dans app/globals.css et via les classes Tailwind CSS.

Polices :
Le projet utilise les polices Geist et Pacifico de Google Fonts, configurées dans app/layout.tsx.

Données mockées :
Les données de démonstration sont directement intégrées dans les composants pour faciliter le développement et les tests.

---

## 🔧 Scripts disponibles :
```bash
npm run dev
Démarrage en mode développement
npm run build
Construction pour la production
npm run lint
Vérification du code avec ESLint
```

---

### 📈 Métriques affichées
Score de résilience : 6.5/10
Santé des sols : 74% en bonne santé
Précision IA : 94% de précision des prédictions

---

## 🤝 Contribution
Forkez le projet
Créez votre branche de fonctionnalité (git checkout -b feature/AmazingFeature)
Committez vos changements (git commit -m 'Add some AmazingFeature')
Poussez vers la branche (git push origin feature/AmazingFeature)
Ouvrez une Pull Request

### 🆘 Support
Pour toute question ou problème, n’hésitez pas à ouvrir une issue sur le repository GitHub.
