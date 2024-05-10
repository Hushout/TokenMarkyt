"use client"
import BrandLogo from '@/svg/brand/BrandLogo'
import React, { FC, useState } from 'react'
import { IconType } from 'react-icons'
import { FaBars } from 'react-icons/fa'
import { SiMarketo } from "react-icons/si"
import { GiWallet } from "react-icons/gi"
import { FcAbout } from "react-icons/fc"
import TransitionLink from './TransitionLink'
import UserProfile from './UserProfile'

const NavBar: FC = () => {
    const pages: { name: string; path: string; icon: IconType }[] = [
        { name: 'MARKET', path: '/market', icon: SiMarketo },
        { name: 'WALLET', path: '/wallet', icon: GiWallet },
        { name: 'ABOUT', path: '/about', icon: FcAbout },
    ]

    const navLinks = pages.map((page, index) => {
        return (
            <TransitionLink key={page.name} href={page.path}>
                {<page.icon className='inline-block lg:hidden mr-5' />}
                {page.name}
            </TransitionLink>
        )
    })

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='fixed z-50 flex justify-between items-center w-screen px-4 h-auto bg-black' >
            <div className='mx-auto lg:ml-8'>
                <TransitionLink href='/' useHover={false} ><BrandLogo /></TransitionLink>
            </div>
            <div>
                <FaBars className='cursor-pointer lg:hidden' fill='white' onClick={() => {
                    setShowMenu(!showMenu);
                }} />
                <nav role="navigation" className={`transition-transform duration-500 ease-in-out fixed lg:relative flex flex-col lg:flex-row top-[102px] lg:top-auto transform lg:transform-none ${showMenu ? "translate-x-[calc(-100%+32px)]" : "translate-x-full"} lg:translate-x-0 items-center justify-center`}>
                    <UserProfile />
                    {navLinks}
                </nav>
            </div>
        </div>
    )
}

export default NavBar