FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install --prod

COPY . .
RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start"]