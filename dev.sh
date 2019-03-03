#!/bin/bash
docker run --rm -it -p 3000:3000 -v `pwd`:/app --workdir=/app node:alpine yarn start
