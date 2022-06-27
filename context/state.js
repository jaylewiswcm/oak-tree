import React, { createContext, useContext, useState, useEffect } from 'react'

export const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    const [productPage, setProductPage] = useState(false);
    const [formModal, setFormModal]  = useState(false)
    
    let sharedState = {
        productPage,
        formModal, 
        setFormModal,
        setProductPage
    }

return (
    <AppContext.Provider value={sharedState}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
    return useContext(AppContext)
}