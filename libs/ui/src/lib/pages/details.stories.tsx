import React from 'react';
import {
  Header, Breadcrumbs, BreadcrumbsItem, Detail
} from '../../index';

export default {
  component: () => {},
  title: 'Pages/Details',
};

export const details = () => {
  const props = {
    onClick: () => {},
  };

  return (
    <div className="flex flex-col overflow-y-auto relative w-full">
      <Header>
        <div className="relative flex flex-grow">
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none bg-gray-200 border border-gray-300 rounded-r-md">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
            </svg>
          </div>
          <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nunca dejes de buscar" />
        </div>
      </Header>
      <div className="flex flex-col items-center bg-gray-100">
        <div className="flex container py-4">
          <Breadcrumbs {...props}>
            <BreadcrumbsItem
              onClick={() => {
                console.log('1');
              }}
            >
              <p>Item 1</p>
            </BreadcrumbsItem>
            <BreadcrumbsItem
              onClick={() => {
                console.log('2');
              }}
            >
              <p>Item 2</p>
            </BreadcrumbsItem>
            <BreadcrumbsItem
              onClick={() => {
                console.log('3');
              }}
            >
              <p>Item 3</p>
            </BreadcrumbsItem>
            <BreadcrumbsItem
              data-active={true}
              onClick={() => {
                console.log('4');
              }}
            >
              <p>Item 4</p>
            </BreadcrumbsItem>
          </Breadcrumbs>
        </div>
        <div className="flex flex-col container">
          <Detail title="Phone product 456" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis massa et enim ultricies, sit amet euismod dui tristique. Donec in tincidunt nisl. Aenean vitae tempus justo. Integer finibus, dui eget feugiat tincidunt, nibh dui iaculis urna, sit amet congue eros mi eu mi. Ut sollicitudin eget nisl ac consectetur. Etiam id nibh ut felis fermentum varius ac non metus. Maecenas erat dui, eleifend ut fringilla non, elementum et lorem. Nulla vitae dolor dignissim, lacinia urna et, faucibus metus. Sed commodo augue sed accumsan condimentum. Sed id libero vitae ipsum bibendum elementum quis id ipsum. Aenean molestie est in tellus mattis tempor." image="https://http2.mlstatic.com/D_615774-MLA46552695388_062021-L.jpg">
            <p className="text-xs">Nuevo - 324 vendidos</p>
            <h3 className="text-lg font-semibold">Deco Reverse Sombrero Oxford</h3>
            <h4 className="text-4xl font-normal pt-3 pb-10">
              $ 1.980
            </h4>
            <button className="relative bg-blue-500 text-white w-full px-6 py-2 rounded text-md font-normal overflow-hidden">Comprar</button>
          </Detail>
        </div>
      </div>
    </div>
  );
};
