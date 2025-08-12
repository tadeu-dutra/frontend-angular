import pkg from 'json-server/package.json' with { type: "json" };
const requiredVersion = '0.17.4';

if (pkg.version !== requiredVersion) {
  console.error(
    `❌ Wrong json-server version detected: ${pkg.version}. ` +
    `Please install version ${requiredVersion}.`
  );
  process.exit(1);
}

console.log(`✅ json-server version ${pkg.version} detected — all good!`);

import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
// server.listen(3000, () => {
//   console.log('JSON Server is running on port 3000');
// });

// making the api vercel ready
export default server;