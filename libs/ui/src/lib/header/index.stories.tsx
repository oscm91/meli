import React from 'react';
import { Header } from './index';

export default {
  component: Header,
  title: 'Header',
};

export const header = (props) => {
  return (
    <Header {...props}>
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
  );
};

header.args = {
  onClick: () => {},
};
