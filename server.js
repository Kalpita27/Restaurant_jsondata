const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json")); // Absolute path to db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router); // Serve JSON from root

export default server; // ✅ Required for Vercel to recognize this as an API
