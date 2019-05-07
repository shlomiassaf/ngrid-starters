ng build ngrid-material-starter --prod --base-href ngrid-material-starter
cp dist/ngrid-material-starter/index.html dist/ngrid-material-starter/404.html

cd dist/ngrid-material-starter

git init
git remote add origin git@github.com:shlomiassaf/ngrid-material-starter.git
git add .
git commit -m "update"
git branch gh-pages
git push --set-upstream origin gh-pages -f
