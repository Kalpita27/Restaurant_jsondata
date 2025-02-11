const jsonServer = require("json-server");
const path = require("path"); // Import path module
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json")); // Ensure absolute path
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router); // Serve JSON from root

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
