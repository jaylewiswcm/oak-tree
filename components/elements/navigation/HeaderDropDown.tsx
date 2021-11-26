import React, { useEffect } from 'react'


interface ComponentProps {
    dropdown: string;
}

const HeaderDropDown = ({dropdown}:ComponentProps) => {
    return (
        <div className={`header-dropdown ${dropdown}`}>
            
        </div>
    )
}

export default HeaderDropDown;