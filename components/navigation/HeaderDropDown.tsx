import React, { useState } from 'react'
//components
import Chairs from './sections/Chairs'
import Beds from './sections/Beds'
import BathLifts from './sections/BathLifts'
import Prices from './sections/Prices'
import About from './sections/About'
import DropDownBottom from './sections/DropDownBottom'
interface ComponentProps {
    dropdown: string;
    type: string 
}

const HeaderDropDown = ({dropdown, type}:ComponentProps) => {
    const [overideDD, setDropDown] = useState(dropdown)
    const hideMenu = () => {
        setDropDown('');
        console.log(overideDD)
    }
    return (
        <div className={`header-dropdown ${dropdown}`} >
            <div className='header-dd-inner'>
                {type && type === 'chairs' && <> <Chairs /> <DropDownBottom /></> }
                {type && type === 'beds' && <> <Beds /> <DropDownBottom /> </>}
                {type && type === 'bathlifts' && <> <BathLifts /> <DropDownBottom /> </>}
                {type && type === 'prices' && <Prices /> }
                {type && type === 'about' && <About /> }
               
            </div>
        </div>
    )
}

export default HeaderDropDown;