const concat = require('concat');

(async function build() {
  const files = [
    './dist/countries/runtime.js',
    './dist/countries/polyfills.js',
    './dist/countries/scripts.js',
    './dist/countries/main.js'
  ];
  await concat(files, './dist/countries/bundle.js');
})();
