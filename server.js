const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(__dirname + "/db.json"); // Ensure db.json path is correct
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router); // Serve JSON at root

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
