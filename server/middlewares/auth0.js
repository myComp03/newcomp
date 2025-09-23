import { auth } from "express-oauth2-jwt-bearer";
import dotenv from "dotenv";
dotenv.config();

const jwtCheck = auth({
  audience: `${process.env.AUTH0_DOMAIN}`,
  issuerBaseURL: `https://${process.env.AUTH0_AUDIENCE}`, // remove extra https://
  // audience: "http://localhost:8080",
  // issuerBaseURL: "https://dev-fmhxba2otfai6a2c.us.auth0.com", // remove extra https://
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
