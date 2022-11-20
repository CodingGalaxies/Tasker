FROM node:18-alpine
WORKDIR /serverTasker
COPY ./package.json .
RUN corepack enable
RUN pnpm i
COPY . .
EXPOSE 3000 
CMD ["pnpm","start:dev"]