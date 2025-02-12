const jsonServer = require("json-server");
const path = require("path");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router(path.join(process.cwd(), "db.json")); // Use process.cwd()
const middlewares = jsonServer.defaults();

server.use(cors({ origin: "*" })); 
server.use(middlewares);
server.use(router);

export default server; // ✅ Required for Vercel API
