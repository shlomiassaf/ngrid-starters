cd dist/apps/ngrid-material-starter

git init
git config user.email "shlomiasaf@gmail.com"
git config user.name "Shlomi Assaf"
git remote add origin git@github.com:shlomiassaf/ngrid-material-starter.git
git add .
git commit -m "update"
git branch gh-pages
git push --set-upstream origin gh-pages -f
