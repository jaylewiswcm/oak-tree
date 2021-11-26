import React from 'react'
import Header from './orphan/Header';

interface ComponentProps  {
    children: any
}


 const OrphanLayout = ({ children }:ComponentProps) => {
     
    return (
        <>
            <Header /> 
            { children }
       
        </>
    )
}

export default OrphanLayout;