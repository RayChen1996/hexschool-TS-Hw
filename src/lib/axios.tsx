// AxiosProvider.tsx
import React, { createContext, useContext, ReactNode } from "react";
import axios, { AxiosInstance } from "axios";
import useTokenStore from "../zustand/useTokenStore";

interface AxiosProviderProps {
  children: ReactNode;
}

const AxiosContext = createContext<AxiosInstance | undefined>(undefined);

export const AxiosProvider: React.FC<AxiosProviderProps> = ({ children }) => {
  const axiosInstance = axios.create({
    baseURL: "https://raychen.co.uk/hotel",

    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useTokenStore.getState().token}`,
    },
  });

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => {
  const axiosInstance = useContext(AxiosContext);

  if (!axiosInstance) {
    throw new Error("useAxios must be used within an AxiosProvider");
  }

  return axiosInstance;
};
