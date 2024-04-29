"use client"
import React, { FC, useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { log } from 'console';

interface Crypto {
    name: string;
    image: string;
    current_price: number;
  }

const CardsShowcase: FC = () => {
    const [cryptoList, setCryptoList] = useState<Crypto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/cryptos');
                const data = await response.json();
                if(data.length > 0){
                    setCryptoList(data);
                }
            } catch (error) {
                console.error('Error fetching cryptocurrency data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {cryptoList.map((item, index) => (
                <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                    <CardBody className="overflow-visible p-0">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.name}
                            className="w-full object-cover h-[140px]"
                            src={item.image}
                        />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                        <b className='whitespace-nowrap overflow-hidden overflow-ellipsis w-[100px] text-left'>{item.name}</b>
                        <p className="text-default-500">{item.current_price}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

export default CardsShowcase;