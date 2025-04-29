import { createContext, useContext } from "react";
import useAuth from "../hooks/useAuth";

const authContext = createContext(null);
const useAuthContext = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const data = useAuth();

  return <authContext.Provider value={data}>{children}</authContext.Provider>;
};

export { authContext, AuthProvider, useAuthContext };
