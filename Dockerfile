FROM node:alpine

# ENV DB_URI=mongodb+srv://cluster0.aeymilo.mongodb.net/?retryWrites=true&w=majority \
#     DB_USERNAME=master \
#     DB_PASSWORD=DBHGtEJUZc01HDaw \
#     DB=task_manager \
#     CONNECTION_TYPE="authMechanism=DEFAULT"

RUN mkdir /home/app

WORKDIR /home/app/
COPY package.json .
COPY yarn.lock .

COPY . .


RUN yarn

EXPOSE 3000

# RUN apk add --no-cache openssl

# ENV DOCKERIZE_VERSION v0.6.1
# RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

CMD ["npm", "start"]

## THE LIFE SAVER
# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
# RUN chmod +x /wait

# ## Launch the wait tool and then your application
# CMD /wait && npm start