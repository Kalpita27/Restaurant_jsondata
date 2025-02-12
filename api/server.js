const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(process.cwd(), "db.json")); // Use process.cwd()
const middlewares = jsonServer.defaults();

// // ✅ Enable CORS to allow requests from Netlify
// server.use(cors({ origin: "*", methods: "GET,POST,PUT,DELETE" }));
// server.use(middlewares);
// server.use(router);

const corsOptions = {
    origin: "*", // Allow all domains (adjust for security)
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204
  };
  
  server.use(cors(corsOptions));
  server.use(middlewares);
  server.use(router);
  

export default server; // ✅ Required for Vercel API
