node_modules/.bin/ng build material --prod --deploy-url ngrid-starters/material/
cp dist/apps/ngrid-starters/material/index.html dist/apps/ngrid-starters/material/404.html

node_modules/.bin/ng build bootstrap --prod --deploy-url ngrid-starters/bootstrap/
cp dist/apps/ngrid-starters/bootstrap/index.html dist/apps/ngrid-starters/bootstrap/404.html
