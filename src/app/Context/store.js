"use client"; 
import { useContext, useState, createContext } from "react";
import { Input } from "@/components/ui/SimpleInput";
import { FaSearch } from 'react-icons/fa';

export const GlobalContext = createContext();

const arr= [];
for (let i = 0; i <= 43; i++) {
    arr.push(false)
};
    

export const GlobalContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartStatus, setCartStatus] = useState(arr);
  
  return (
    <GlobalContext.Provider value={{ cart, setCart, cartStatus,setCartStatus }}>
    
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  useContext(GlobalContext);
};

