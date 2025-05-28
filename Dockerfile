# Étape de build
FROM node:18-alpine AS build
WORKDIR /app

# Installer pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copier les fichiers de dépendances d'abord pour tirer parti du cache Docker
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Copier le reste des fichiers et construire l'application
COPY . .
RUN pnpm run build

# Étape de production
FROM nginx:alpine

# Supprimer le fichier de configuration par défaut de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copier la configuration Nginx
COPY docker/nginx.conf /etc/nginx/conf.d/

# Copier les fichiers de build de l'application
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
