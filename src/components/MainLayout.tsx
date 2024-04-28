import React, { FC } from 'react'
import MainHeader from './MainHeader'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <MainHeader />
            MainLayout
            {children}
        </div>
    )
}

export default MainLayout