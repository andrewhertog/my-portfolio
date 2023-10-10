#!/bin/bash
set +e  # Continue on errors

export NODE_ENV=development

npm i -g pnpm
pnpm install

bash --norc
