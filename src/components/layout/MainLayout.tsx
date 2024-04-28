import React, { FC } from 'react'
import NavBar from './NavBar'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className='w-screen min-h-screen'>
            <NavBar />
            <div className='w-screen flex justify-center'>
                {children}
            </div>
        </div>
    )
}

export default MainLayout