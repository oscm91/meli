import React from 'react';
import { Detail, DetailProps } from './index';

export default {
  component: Detail,
  title: 'Detail',
};

export const detail = (props) => {
  return (
    <Detail {...props}>
      <p className="text-xs">Nuevo - 324 vendidos</p>
      <h3 className="text-lg font-semibold">Deco Reverse Sombrero Oxford</h3>
      <h4 className="text-4xl font-normal pt-3 pb-10">
        $ 1.980
      </h4>
      <button className="relative bg-blue-500 text-white w-full px-6 py-2 rounded text-md font-normal overflow-hidden">Comprar</button>
    </Detail>
  );
};

detail.args = {
  title: 'Total de ventas de septiembre',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis massa et enim ultricies, sit amet euismod dui tristique. Donec in tincidunt nisl. Aenean vitae tempus justo. Integer finibus, dui eget feugiat tincidunt, nibh dui iaculis urna, sit amet congue eros mi eu mi. Ut sollicitudin eget nisl ac consectetur. Etiam id nibh ut felis fermentum varius ac non metus. Maecenas erat dui, eleifend ut fringilla non, elementum et lorem. Nulla vitae dolor dignissim, lacinia urna et, faucibus metus. Sed commodo augue sed accumsan condimentum. Sed id libero vitae ipsum bibendum elementum quis id ipsum. Aenean molestie est in tellus mattis tempor.',
  image: 'https://http2.mlstatic.com/D_615774-MLA46552695388_062021-L.jpg',
};
