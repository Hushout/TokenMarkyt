'use client'
import React, { FC } from 'react'
import { useQuery } from "@tanstack/react-query";
import CardsShowcase,{Crypto} from '@/components/pages/homePage/CardsShowcase';

const fetchCrypto = async () => {
  const response = await fetch('/api/cryptos');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

const HomePage: FC = () => {
  const { data: cryptoList, isPending, isError } = useQuery<Crypto[]>({
    queryKey: ['fetchCrypto'],
    queryFn: fetchCrypto,
  });
  return (
    <section className='flex flex-col items-center justify-center p-5 lg:p-20 mt-20'>
      <h1 className='text-3xl lg:text-7xl font-extrabold text-center mb-10'>
        Welcome to TokenMarkyt
      </h1>
      <CardsShowcase cryptoList={cryptoList} isLoading={isPending} isError={isError} />
    </section>
  )
}

export default HomePage