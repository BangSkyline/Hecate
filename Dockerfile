# Utiliser l'image officielle Node.js
FROM node:18.19.0-alpine AS base

# Installer les dépendances uniquement quand nécessaire
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Reconstruire le code source uniquement quand nécessaire
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Image de production, copier tous les fichiers et exécuter next
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=80
# Créer un utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copier les assets publics
COPY --from=builder /app/public ./public

# Préparer le dossier .next avec les bons droits
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copier le serveur standalone et les fichiers statiques
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Passer à l'utilisateur non-root
USER nextjs
EXPOSE 80
# Lancer l'application
CMD ["node", "server.js"]
