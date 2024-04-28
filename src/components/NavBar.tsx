import React, { FC } from 'react'
import { FaBars } from 'react-icons/fa'

interface NavBarProps {
}

const NavBar: FC<NavBarProps> = () => {
    return (
        <div className='flex justify-between items-center w-100% px-4 h-auto'>
            <div>Brand</div>
            <div>
                {/* <FaBars className='color-white cursor-pointer'/> */}
            </div>
        </div>
    )
}

export default NavBar