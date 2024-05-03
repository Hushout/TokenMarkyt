'use client'

import { NextUIProvider } from "@nextui-org/react";
import React, { FC } from "react";
import '@rainbow-me/rainbowkit/styles.css';

import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import config from '../utils/web3/wagmiConfig';

interface ProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <RainbowKitProvider theme={darkTheme()}>
            <main className="dark text-foreground bg-background">
              {children}
            </main>
          </RainbowKitProvider>
        </NextUIProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Providers