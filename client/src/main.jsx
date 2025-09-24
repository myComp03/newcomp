import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-fmhxba2otfai6a2c.us.auth0.com"
      clientId="xV3ed7OoeaGuVzCI9H18Euqw9vUReMCh"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "http://localhost:8000",
      }}
    >
      <UserProvider>
        <App />
      </UserProvider>
    </Auth0Provider>
  </StrictMode>
);
