import React, { useState } from "react";
import { useUser } from "../context/UserContext";

function Login() {
  const { isAuthenticated, loginWithRedirect, logout, dbUser } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Right: User */}
      <div className="flex items-center gap-4 relative">
        {isAuthenticated ? (
          <div className="relative">
            <img
              src={dbUser?.userImg}
              alt={dbUser?.name}
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-purple-500"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="absolute mt-2 right-0 w-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-50">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-red-500 hover:text-white"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={loginWithRedirect}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
