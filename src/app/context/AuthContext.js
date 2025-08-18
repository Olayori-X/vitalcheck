import { createContext, useContext, useState } from "react";
import {
  AUTH_REFRESH_KEY,
  AUTH_TOKEN_KEY,
  CURRENT_USER,
  SESSION,
} from "../constant/authToken";
import { encryptToken } from "../services";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(sessionStorage.getItem(AUTH_TOKEN_KEY))
  );
  const [sessionExpired, setSessionExpired] = useState(
    Boolean(sessionStorage.getItem(SESSION))
  );
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSide = () => {
    setShowSidebar(true);
  };

  const handleHideSide = () => {
    setShowSidebar(false);
  };

  const showExpired = () => {
    sessionStorage.setItem(SESSION, true);
    setSessionExpired(true);
  };

  const hideExpired = () => {
    sessionStorage.removeItem(SESSION);
    setSessionExpired(false);
  };

  const login = (profile) => {
    const encryptedAccessToken = encryptToken(
      profile?.authTokens?.access_token
    );
    const encryptedRefreshToken = encryptToken(
      profile?.authTokens?.refresh_token
    );

    sessionStorage.setItem(AUTH_TOKEN_KEY, encryptedAccessToken);
    sessionStorage.setItem(AUTH_REFRESH_KEY, encryptedRefreshToken);

    setIsLoggedIn(true);
    hideExpired();
  };

  const logout = () => {
    setIsLoggedIn(false);
    setSessionExpired(false);
    sessionStorage.removeItem(CURRENT_USER);
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    sessionStorage.removeItem(AUTH_REFRESH_KEY);
    hideExpired();
    setShowSidebar(false);
  };

  const data = {
    isLoggedIn,
    logout,
    login,
    sessionExpired,
    showExpired,
    hideExpired,
    showSidebar,
    handleHideSide,
    handleShowSide,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
