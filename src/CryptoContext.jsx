import React, { Children, createContext, useContext, useEffect, useState } from 'react';


const Crypto = createContext()

const CryptoContext = ({children}) => {

  const [currency, setCurrency] = useState("BDT");
  const [symbol, setSymbol] = useState("৳");

  useEffect(() => {
    if (currency === "BDT"){
      setSymbol("৳")
    }

    else if(currency === "USD"){
      setSymbol("$")
    }
 
  }, [currency]);

  return (
    <Crypto.Provider value={{currency,symbol,setCurrency}} >
      {Children}
    </Crypto.Provider>
  )
}

export default CryptoContext;

export const  CryptoState = () =>{
  return useContext(Crypto)
}