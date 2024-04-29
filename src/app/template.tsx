"use client"
import { animationPageIn } from '@/utils/animations';
import React, { FC, useEffect } from 'react'

interface TemplateProps {
    children: React.ReactNode
}

const Template: FC<TemplateProps> = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        animationPageIn()
    }, [])
    return (
        <div>
            <div id="banner1" className="min-h-screen bg-neutral-950 z-40 fixed top-0 left-[0%] w-1/4"></div>
            <div id="banner2" className="min-h-screen bg-neutral-950 z-40 fixed top-0 left-[25%] w-1/4"></div>
            <div id="banner3" className="min-h-screen bg-neutral-950 z-40 fixed top-0 left-[50%] w-1/4"></div>
            <div id="banner4" className="min-h-screen bg-neutral-950 z-40 fixed top-0 left-[75%] w-1/4"></div>
            {children}
        </div>
    )
}

export default Template