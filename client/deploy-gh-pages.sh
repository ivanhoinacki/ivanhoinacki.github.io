#!/bin/bash
set -e

# Configurações
dist_dir="dist/ivanhoinacki"
repo_url="https://github.com/ivanhoinacki/ivanhoinacki.github.io.git"
branch="master"
user_name="Ivan Augusto Hoinacki"
user_email="ivanhoinack@gmail.com"

# 1. Build do projeto
npx ng build --prod

# 2. Entra na pasta de build
echo "Acessando $dist_dir"
cd $dist_dir

# 3. Inicializa repositório git temporário
git init
git config user.name "$user_name"
git config user.email "$user_email"
git remote add origin "$repo_url"
git checkout -b $branch

# 4. Adiciona e faz commit
git add .
git commit -m "Deploy automático para master"

# 5. Push forçado para a branch master
git push -f origin $branch

# 6. Limpa o repositório temporário
cd ../..
rm -rf $dist_dir/.git

echo "Deploy realizado com sucesso para $repo_url ($branch)" 