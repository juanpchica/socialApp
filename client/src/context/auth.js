import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [prueba, setPrueba] = useState("probando");
  return <AuthContext.Provider value={prueba} {...props} />;
};

export { AuthProvider, AuthContext };
