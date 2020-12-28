node_modules/.bin/ng build material --prod --base-href material/ --deploy-url material/
cp dist/apps/ngrid-starters/material/index.html dist/apps/ngrid-starters/material/404.html

node_modules/.bin/ng build bootstrap --prod --base-href bootstrap/ --deploy-url bootstrap/
cp dist/apps/ngrid-starters/bootstrap/index.html dist/apps/ngrid-starters/bootstrap/404.html
