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
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-12 h-12 p-[2px] rounded-full bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={dbUser?.picture}
                  alt={dbUser?.name || "User"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

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
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
