import React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  title: string;
  image: string;
  onClick: () => void;
}

export function Card({ children, title, image, ...props }: CardProps) {
  return (
    <div className="flex flex-row flex-wrap p-3 bg-white cursor-pointer" {...props}>
      <img width="280" className="flex-none rounded-md overflow-hidden" src={image} alt='Image' />
      <div className="flex flex-grow items-start flex-col p-6">
        {children}
      </div>
      <div className="flex-none">
        <span className="block text-xs text-gray-500 pr-20 pt-8">{title}</span>
      </div>
    </div>
  );
}

export default Card;
