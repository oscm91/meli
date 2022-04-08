import React from 'react';
import { Card, CardProps } from './index';

export default {
  component: Card,
  title: 'Card',
};

export const card = (props) => {
  return (
    <Card {...props}>
      <div className="flex gap-2 items-center">
        <h4 className="text-lg font-medium">
          $1'560.000
        </h4>
        <span className="w-3 h-3 block rounded-full bg-green-700"></span>
      </div>
      <p className="text-sm pt-3.5">MÁS VENDIDO Samsung Galaxy A32 Dual SIM 128 GB awesome black 4 GB RAM</p>
    </Card>
  );
};

card.args = {
  title: 'Total de ventas de septiembre',
  image: 'https://http2.mlstatic.com/D_615774-MLA46552695388_062021-L.jpg',
};
