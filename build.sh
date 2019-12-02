#!/bin/bash
yarn run postcss src/css/tailwind.css -o public/css/tailwind.css
cp -r src/img public/
cp -r src/pdf public/
cp src/index.html public/
cp src/CNAME public/