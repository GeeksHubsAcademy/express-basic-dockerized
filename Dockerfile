# docker hub image
FROM node

# directorio de trabajo
WORKDIR /app

# copiamos todo nuestro codigo dentro del archivo
COPY . .

# instalamos dependencias
RUN npm install

CMD ["npm", "run", "dev"]