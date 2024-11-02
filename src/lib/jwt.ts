import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") }); // GET .env file from the root
import * as jwt from "jsonwebtoken";
import * as crypto from "crypto";

// Add debugging to see if environment variables are loaded
console.log("Environment variables:", {
  CB_NAME: process.env.NEXT_PUBLIC_CB_NAME ? "exists" : "missing",
  CB_PRIVATEKEY: process.env.NEXT_PUBLIC_CB_PRIVATEKEY ? "exists" : "missing",
});

const keyName = process.env.NEXT_PUBLIC_CB_NAME;
const keySecret = process.env.NEXT_PUBLIC_CB_PRIVATEKEY;

if (!keyName || !keySecret) {
  throw new Error(
    `Missing required environment variables CB_NAME: ${keyName} or CB_PRIVATEKEY: ${keySecret}`
  );
}

const requestMethod = "GET";
const requestHost = "api.coinbase.com";
const requestPath = "/api/v3/brokerage/accounts";
const algorithm = "ES256";

const uri = `${requestMethod} ${requestHost}${requestPath}`;

try {
  const generateJWT = (): string => {
    const payload = {
      iss: "cdp",
      nbf: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 120,
      sub: keyName,
      uri,
    };

    const header = {
      alg: algorithm,
      kid: keyName,
      nonce: crypto.randomBytes(16).toString("hex"),
    };

    return jwt.sign(payload, keySecret, { algorithm, header });
  };

  const main = () => {
    const token = generateJWT();
    console.log(token);
  };

  main();
} catch (error) {
  console.error("Error generating JWT:", error);
}
