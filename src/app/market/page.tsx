'use client'
import CardsShowcase, { Crypto } from '@/components/pages/homePage/CardsShowcase'
import { SearchIcon } from '@/svg/Icon/SearchIcon'
import { Input } from '@nextui-org/react'
import React, { FC, useRef, useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import debounce from 'lodash.debounce';

const MarketPage: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useRef(debounce(async (searchTerm: string) => {
    const response = await fetch(`/api/cryptos/${searchTerm}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  }, 500, { leading: true })).current;

  const { data, isPending, isError } = useQuery({
    queryKey: ['searchCrypto', searchTerm],
    queryFn: async () => {
      const response = await debouncedSearch(searchTerm);
      return response;
    },
    enabled: searchTerm !== '',
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  return (
    <div className='flex flex-col items-center justify-center p-20 mt-10 max-h-[100vh]'>
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[400px] h-10 mb-5",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Type to search..."
        startContent={<SearchIcon size={18} />}
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {!!data && !!data.coins ? <CardsShowcase cryptoList={data.coins} isLoading={isPending} isError={isError} /> : null}
    </div>
  )
}

export default MarketPage