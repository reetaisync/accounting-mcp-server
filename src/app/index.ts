import "dotenv/config";

console.log("QBO_CLIENT_ID =", process.env.QBO_CLIENT_ID);
console.log("QBO_REDIRECT_URI =", process.env.QBO_REDIRECT_URI);

import { Bootstrap } from "./bootstrap.js";

const app = new Bootstrap();

await app.start();