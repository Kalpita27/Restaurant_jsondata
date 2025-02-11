const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Ensure db.json is in the root folder
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router); // Serve JSON from the root

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
