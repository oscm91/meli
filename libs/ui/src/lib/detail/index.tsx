import React from 'react';

export interface DetailProps {
  children?: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

export function Detail({ children, title, description, image }: DetailProps) {
  return (
    <div className="flex flex-row flex-wrap md:flex-nowrap p-3 bg-white gap-x-10">
      <div className="flex flex-grow items-start flex-col">
        <img className="flex-none rounded-md overflow-hidden w-full" src={image} alt='Image' />
        <h2 className="text-2xl pb-4 pt-20">{title}</h2>
        <p className="text-md text-gray-500">{description}</p>
      </div>
      <div className="flex-none max-w-xs">
        {children}
      </div>
    </div>
  );
}

export default Detail;
