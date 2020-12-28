# node_modules/.bin/ng build material --prod --base-href ngrid-starters/material/ --deploy-url ngrid-starters/material/
node_modules/.bin/ng build material --prod
cp dist/apps/ngrid-starters/material/index.html dist/apps/ngrid-starters/material/404.html

# node_modules/.bin/ng build bootstrap --prod
node_modules/.bin/ng build bootstrap --prod
cp dist/apps/ngrid-starters/bootstrap/index.html dist/apps/ngrid-starters/bootstrap/404.html
