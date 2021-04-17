FROM ghcr.io/graalvm/graalvm-ce:latest
WORKDIR /app
COPY app /app/
COPY app/.env /app/.env
EXPOSE 4000
COPY  --from=hengyunabc/arthas:latest /opt/arthas /opt/arthas
CMD [ "npm","run","dev" ]