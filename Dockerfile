FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install


COPY . .

EXPOSE 3030

CMD ["sh", "-c", "pnpm run build && pnpm run start"]
