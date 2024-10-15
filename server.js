const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Ensure the path to db.json is correct
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);  // Serve db.json at /api

server.listen(3000, () => {
  console.log('JSON Server is running');
});
