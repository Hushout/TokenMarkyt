"use client"
import React, { FC } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
export interface Crypto {
    name: string;
    image?: string;
    large?: string;
    current_price: number;
}

const CardsShowcase: FC<{ cryptoList?: Crypto[], isLoading?: Boolean, isError?: Boolean }> = ({ cryptoList, isLoading, isError }) => {
    if (isLoading) return <div>Loading...</div>;
    if (isError || !cryptoList) return <div>Error fetching data</div>;

    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-6">
            {cryptoList.map((item, index) => (
                <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                    <CardBody className="overflow-visible p-0">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.name}
                            className="w-full object-cover h-[140px]"
                            src={!!item.image? item.image: item.large}
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