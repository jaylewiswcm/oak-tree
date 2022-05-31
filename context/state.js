import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    const [hideBottomBar, setToHideBottomBar] = useState('');
    const [productPage, setProductPage] = useState(false);
    let sharedState = {
        hideBottomBar,
        setToHideBottomBar,
        productPage,
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