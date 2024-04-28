"use client"
import BrandLogo from '@/svg/brand/BrandLogo';
import React, { FC, useState } from 'react'
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
            <a key={index} href={page.path} className='text-white font-bold px-8 hover:text-[#50d71e]'>{page.name}</a>
        )
    })

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='flex justify-between items-center w-screen px-8 h-auto' >
            <a href='/' className='ml-8'><BrandLogo /></a>
            <div>
                <FaBars className='color-white cursor-pointer lg:hidden' onClick={() => {
                    setShowMenu(!showMenu);
                }} />
                <nav role="navigation" className={`transition-all fixed lg:relative flex flex-col lg:flex-row top-20 lg:top-auto right-${showMenu ? "0" : "[-20rem]"} lg:right-0`}>
                    {navLinks}
                </nav>
            </div>
        </div>
    )
}

export default NavBar