const pkg = require('./package.json');

const installedVersion = pkg.dependencies['json-server'] || pkg.devDependencies['json-server'] || 'unknown';

// Fail if it's not 0.17.4 exactly
if (installedVersion !== '0.17.4') {
  console.error(`
❌ Wrong json-server version detected: ${installedVersion}
Please use exactly version 0.17.4 to avoid known issues.
Run:
    npm install json-server@0.17.4 --save
  `);
  process.exit(1);
}
