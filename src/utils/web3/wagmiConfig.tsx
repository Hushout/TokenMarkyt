import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
  } from 'wagmi/chains';
    import { getDefaultConfig } from '@rainbow-me/rainbowkit';

const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true,
  });

  export default config;