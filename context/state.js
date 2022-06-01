import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext();

export const AppWrapper = ({ children }) => {

    const [productPage, setProductPage] = useState(false);
    const [formModal, setFormModal]  = useState(false)

    let sharedState = {
        productPage,
        setProductPage,
        formModal,
        setFormModal
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