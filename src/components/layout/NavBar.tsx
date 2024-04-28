"use client"
import BrandLogo from '@/svg/brand/BrandLogo'
import React, { FC, useState } from 'react'
import { IconType } from 'react-icons'
import { FaBars } from 'react-icons/fa'
import { SiMarketo } from "react-icons/si"
import { GiWallet } from "react-icons/gi"
import { FcAbout } from "react-icons/fc"

interface NavBarProps {
}

const NavBar: FC<NavBarProps> = () => {
    const pages: { name: string; path: string; icon: IconType }[] = [
        { name: 'MARKET', path: '/market', icon: SiMarketo },
        { name: 'WALLET', path: '/wallet', icon: GiWallet },
        { name: 'ABOUT', path: '/about', icon: FcAbout },
    ]

    const navLinks = pages.map((page, index) => {
        return (
            <a key={index} href={page.path} className='text-white font-bold px-8 py-4 hover:text-black bg-black hover:bg-white flex items-center justify-center'>
                    {<page.icon className='inline-block lg:hidden mr-5' />}
                    {page.name}
            </a>
        )
    })

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='flex justify-between items-center w-screen px-8 h-auto' >
            <a href='/' className='mx-auto lg:ml-8'><BrandLogo /></a>
            <div>
                <FaBars className='color-white cursor-pointer lg:hidden' onClick={() => {
                    setShowMenu(!showMenu);
                }} />
                <nav role="navigation" className={`transition-transform duration-500 ease-in-out fixed lg:relative flex flex-col lg:flex-row top-20 lg:top-auto transform lg:transform-none ${showMenu ? "translate-x-[calc(-100%+47px)]" : "translate-x-full"} lg:translate-x-0`}> 
                    {navLinks}
                </nav>
            </div>
        </div>
    )
}

export default NavBar