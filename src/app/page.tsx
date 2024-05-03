import CardsShowcase from '@/components/pages/homePage/CardsShowcase';
import React, { FC } from 'react'

const HomePage: FC = () => {
  return (
    <section className='flex flex-col items-center justify-center p-5 lg:p-20 mt-20'>
      <h1 className='text-3xl lg:text-7xl font-extrabold text-center mb-10'>
        Welcome to TokenMarkyt
      </h1>
        <CardsShowcase />
    </section>
  )
}

export default HomePage