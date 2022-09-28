FROM gcr.io/distroless/nodejs@sha256:0ab0c25a43c128eea3709246f6ec6383ac8b2027b33431b79199b1cf13331a64

COPY /build ./build

EXPOSE 8080

CMD ["./build/index.js"]
