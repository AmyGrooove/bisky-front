FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install --prod

COPY . .

RUN pnpm run build

EXPOSE 3030

CMD ["sh", "-c", "pnpm run start"]