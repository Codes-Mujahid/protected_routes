import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const navigate= useNavigate()
  const [islogged, setIsLogged]= useState(false)
  const [showUserLogin, setShowUserLogin]= useState(false)
  const [showUserRegister, setShowUserRegister]= useState(false)
  const [formData, setFormData]= useState({username:'', email:'', password:''})
  const [loginData, setLoginData]= useState({email:'', password:''})

  const value = {
    navigate, toast, islogged, setIsLogged, showUserLogin, showUserRegister, setShowUserLogin, setShowUserRegister, formData, setFormData, loginData, setLoginData
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
