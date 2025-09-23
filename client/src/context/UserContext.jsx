import { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const {
    user,
    isAuthenticated,
    getAccessTokenSilently,
    logout,
    loginWithRedirect,
  } = useAuth0();
  const [dbUser, setDbUser] = useState(null);

  useEffect(() => {
    const saveUserToDB = async () => {
      if (isAuthenticated && user) {
        try {
          const token = await getAccessTokenSilently({
            audience: "http://localhost:8000",
            scope: "openid profile email",
          });

          const res = await axios.post(
            "http://localhost:8000/api/users/save",
            { email: user.email, name: user.name, userImg: user.userImg },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          // console.log(token);

          setDbUser(res.data);
        } catch (err) {
          console.error("Error saving user:", err);
        }
      }
    };
    saveUserToDB();
  }, [isAuthenticated, user]);

  return (
    <UserContext.Provider
      value={{ dbUser, isAuthenticated, loginWithRedirect, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
