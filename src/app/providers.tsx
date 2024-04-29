'use client'

import { NextUIProvider } from "@nextui-org/react";
import React, { FC } from "react";

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers:FC<ProvidersProps> = ({children}) =>{
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        {children}
      </main>
    </NextUIProvider>
  )
}

export default Providers