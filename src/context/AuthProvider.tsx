import React, {createContext, useCallback, useEffect, useState} from 'react';

interface AuthContextData {
  isAuthenticated: boolean;
  loading: boolean;
  login: () => void;
}
interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
    }, 3000);
  }, []);

  const login = useCallback(() => {
    setIsAuthenticated(true);
  }, []);
  return (
    <AuthContext.Provider value={{isAuthenticated, loading, login}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
