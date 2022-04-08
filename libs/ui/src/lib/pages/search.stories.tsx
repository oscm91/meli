import React from 'react';
import {
  Header,
  Breadcrumbs,
  BreadcrumbsItem, Card
} from '../../index';

export default {
  component: () => {},
  title: 'Pages/Search',
};

export const search = () => {
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
        <div className="flex flex-col container gap-y-0.5">
          {[1,2,3,4].map((value) => {
            return <Card title={`Celular iphone ${value}`} image="https://http2.mlstatic.com/D_615774-MLA46552695388_062021-L.jpg" onClick={() => {}}>
              <div className="flex gap-2 items-center">
                <h4 className="text-lg font-medium">
                  $1'560.000
                </h4>
                <span className="w-3 h-3 block rounded-full bg-green-700"></span>
              </div>
              <p className="text-sm pt-3.5">MÁS VENDIDO Samsung Galaxy A32 Dual SIM 128 GB awesome black 4 GB RAM</p>
            </Card>
          })}
        </div>
      </div>
    </div>
  );
};
