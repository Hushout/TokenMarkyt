import BrandLogo from '@/svg/brand/BrandLogo';
import React, { FC } from 'react'
import { FaBars } from 'react-icons/fa'

interface NavBarProps {
}

const NavBar: FC<NavBarProps> = () => {
    const pages: { name: string; path: string }[] = [
        { name: 'MARKET', path: '/market' },
        { name: 'WALLET', path: '/wallet' },
        { name: 'ABOUT', path: '/about' },
    ]

    const navLinks = pages.map((page, index) => {
        return (
            <a key={index} href={page.path} className='text-white font-bold px-2'>{page.name}</a>
        )
    })

    return (
        <div className='flex justify-between items-center w-100% px-4 h-auto'>
            <a href='/'><BrandLogo /></a>
            <div>
                {/* <FaBars className='color-white cursor-pointer'/> */}
                <nav role="navigation" className="flex">
                    {navLinks}
                </nav>
            </div>
        </div>
    )
}

export default NavBar