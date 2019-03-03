#!/bin/bash
docker run --rm -it -v `pwd`:/app --workdir=/app --entrypoint "npm" node:alpine
