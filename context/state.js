import React, { createContext, useContext, useState, useEffect } from 'react'

export const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    const [productPage, setProductPage] = useState(false);
    const [formModal, setFormModal]  = useState(false)
    const [isExitIntent, setIsExitIntent]  = useState(false)
    const [adCookies, assignAdCookies]  = useState({
        "lead_source": "",
        "ad_campaign": "",
        "gclid": "",
    })
    
    let sharedState = {
        productPage,
        formModal, 
        setFormModal,
        setProductPage,
        assignAdCookies,
        adCookies,
        setIsExitIntent,
        isExitIntent
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