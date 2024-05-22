# Frontend-Vue-Nuxt-From-Officiel
//Un Frontend en nuxt et vue depuis les exemples de la documentation officielle
//Courrez ces commandes avant de cloner
# Installation de node 18
## installer nvm (pour windows https://snowpact.com/blog/nvm-guide-d-installation ou linux)
sudo apt install curl 
//sur https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script copier et coller dans le terminal la commande curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm ls
ou
nvm version
#installer node 18
nvm install 18
# Installation de nuxt
sudo apt update
sudo apt install npm
npx nuxi@latest init <project-name>
# install router
npm install vue-router@4
# Lancement serveur développement:
npm run dev -- -o
