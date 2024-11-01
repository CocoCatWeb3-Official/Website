FROM node:18.19.0

ENV NITRO_PORT=6999

RUN mkdir -p /usr/src/app  

WORKDIR /usr/src/app
  
COPY ./.output /usr/src/app/.output/

EXPOSE 6999 

# RUN node .output/server/index.mjs 

CMD node .output/server/index.mjs


