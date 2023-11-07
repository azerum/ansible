#!/bin/sh

if [ "$(command -v nvm)" != "" ]; then
    exit
fi

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
