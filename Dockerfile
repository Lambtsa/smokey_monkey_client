# syntax=docker/dockerfile:1

# The Smokey Monkey production image.
# Builds the Next.js app in "standalone" mode and runs it with plain Node:
# no PM2 needed, Docker restarts the container if it stops.
#
#   docker build -t smokey-monkey .
#   docker run --rm -p 8080:8080 --env-file .env.local smokey-monkey
#
# Nothing is baked in at build time: MAPBOX_TOKEN, GTAG and the SMTP account are read from the
# environment when the container runs, the site address from each request.

ARG NODE_VERSION=24.14.0

# --- Dependencies (cached until package.json or the lockfile change) ---
FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app
# Skip git hooks: there is no .git inside the build
ENV HUSKY=0
RUN npm install -g pnpm@11
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# --- Build ---
FROM deps AS build
# No build-time settings: the image is the same for every environment.
# The site's address comes from each request, the rest from the server's env.
ENV NEXT_TELEMETRY_DISABLED=1
COPY . .
RUN pnpm build

# --- Runtime: only the standalone server, static files and public assets ---
FROM node:${NODE_VERSION}-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=8080 \
    HOSTNAME=0.0.0.0

COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public

USER node
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/robots.txt || exit 1

CMD ["node", "server.js"]
