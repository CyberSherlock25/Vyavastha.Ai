import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getCurrentUser,
  logoutUser,
} from "../services/api/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /*
   * Check the server-side session when
   * the React application starts.
   */
  useEffect(() => {
    async function checkSession() {
      try {
        const currentUser = await getCurrentUser();

        if (currentUser) {
          setUser(currentUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error(
          "Failed to restore authentication session:",
          error
        );

        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    checkSession();
  }, []);


  function login(userData) {
    setUser(userData);
  }


async function logout() {
  try {
    await logoutUser();
  } catch (error) {
    console.error("Logout failed:", error);
  } finally {
   
    setUser(null);
  }
}

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: Boolean(user),
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}