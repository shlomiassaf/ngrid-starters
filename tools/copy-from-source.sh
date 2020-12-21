rm -rf node_modules/@pebula
cp -r ../ngrid/dist/@pebula node_modules/@pebula
./node_modules/.bin/ngcc --async false
