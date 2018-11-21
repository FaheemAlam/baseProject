# use 8.9 alpine because of bcrypt binary which is pulled
#  by the crypto dependency. Bcrypt currently does not exist
#  yet for the latest 9x node version; only 57 (version 8x)
#  is available: https://github.com/kelektiv/node.bcrypt.js/releases
# we should use latest alpine when binaries are released.
FROM node:8.9-alpine
ADD package.json /tmp/package.json
ADD .npmrc /tmp/.npmrc
RUN apk update && apk upgrade && apk add --no-cache bash git openssh
RUN cd /tmp && npm install && rm -f .npmrc

RUN mkdir -p /opt/project && cp -a /tmp/node_modules /opt/project/ && cp -a /tmp/package.json /opt/project/

WORKDIR /opt/project
ADD ./dist ./dist
ADD ./migrations ./migrations
EXPOSE 9413

CMD npm start
