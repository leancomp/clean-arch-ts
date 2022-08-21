FROM node:14-alpine as builder
WORKDIR /app

COPY package*.json /app/
RUN npm install --omit=dev

COPY . .
RUN npm run build
RUN npm prune --production

FROM ghcr.io/astefanutti/scratch-node:14 as final
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist/ dist
COPY --from=builder /app/node_modules/ node_modules

ENTRYPOINT ["node", "dist/cmd/index.js"]