import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const contentIsLoading = () => {
    setLoading(true);
  };
  const contentIsLoaded = () => {
    setLoading(false);
  };

  return (
    <LoadingContext.Provider
      value={{ loading, contentIsLoading, contentIsLoaded }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
