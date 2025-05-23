#!/bin/bash
set -e

# Configurações
dist_dir="dist/ivanhoinacki"
# Usar URL SSH para autenticação segura
repo_url="git@github.com:ivanhoinacki/ivanhoinacki.github.io.git"
branch="master"
user_name="Ivan Augusto Hoinacki"
user_email="ivanhoinack@gmail.com"

# 1. Build do projeto
echo "[1/6] Iniciando build do projeto Angular..."
npx ng build --prod
echo "[1/6] Build concluído."

# 2. Entra na pasta de build
echo "[2/6] Acessando diretório de build: $dist_dir"
cd $dist_dir

# 3. Inicializa repositório git temporário
echo "[3/6] Inicializando repositório git temporário..."
git init > /dev/null
git config user.name "$user_name"
git config user.email "$user_email"
git remote add origin "$repo_url"
git checkout -b $branch
echo "[3/6] Repositório git pronto."

# 4. Adiciona e faz commit
echo "[4/6] Adicionando arquivos e realizando commit..."
git add .
git commit -m "Deploy automático para $branch"
echo "[4/6] Commit realizado."

# 5. Push forçado para a branch master via SSH
echo "[5/6] Realizando push via SSH para $branch..."
git push -f origin $branch
echo "[5/6] Push realizado com sucesso."

# 6. Limpa o repositório temporário
echo "[6/6] Limpando repositório temporário..."
cd ../..
rm -rf $dist_dir/.git

echo "Deploy finalizado com sucesso usando SSH!" 