const fs = require('fs-extra');
const concat = require('concat');

(async function build(){
  const files= ['./dist/web-element/runtime.js','./dist/web-element/polyfills.js','./dist/web-element/main.js'];
  await fs.ensureDir('elements');
  await concat(files, 'elements/angular-app.js');
})()
