FROM node:20
ENV NODE_ENV development
ENV DEBUG=playground:*
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm install
USER node
CMD ["npm", "run", "dev"]