'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'

const UserProfile = () => {
    return (
        <div className='order-first lg:order-last h-fit'>
            <ConnectButton
                accountStatus="avatar"
                chainStatus="icon" 
                showBalance={false}  
            />
        </div>
    )
}

export default UserProfile