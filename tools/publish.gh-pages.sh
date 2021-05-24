cd dist/apps/ngrid-starters

git init
git config user.email "shlomiasaf@gmail.com"
git config user.name "Shlomi Assaf"
git remote add origin git@github.com:shlomiassaf/ngrid-starters.git
git add .
git commit -m "update"
git branch gh-pages
git push --set-upstream origin gh-pages -f
