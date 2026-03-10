#!/bin/bash

# echo "Iniciando Back-end"
# cd server
# if [ ! -d "node_modules" ]; then
#     npm install
# fi 
# npm start &
 
echo "Iniciando Front-end"
cd client
# cd ../client
if [ ! -d "node_modules" ]; then
    npm install
fi 
npm run dev &

echo "Aplicação Rodando"
await