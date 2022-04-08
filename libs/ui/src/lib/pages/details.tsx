import React from 'react';
import { Header } from '../header';
import { Breadcrumbs, BreadcrumbsItem } from '../breadcrumbs';
import { Detail } from '../detail';
import { debounce } from 'lodash';

export interface DetailsProps {
  facade: any;
  history: any;
}

export function Details({ facade, history }: DetailsProps) {
  const [searchTerm, setSearchTerm] = React.useState('')
  const searchProduct = React.useCallback(debounce((term) => facade.searchProduct(term)), [facade]);
  const getProduct = React.useCallback(debounce(() => facade.getProduct(history.getSearch())), [facade, history]);

  const { product } = facade.getState() || {
    product: {
      categories: [],
      item: {},
    },
  };

  React.useEffect(() => {
    getProduct()

    if (searchTerm !== '') {
      searchProduct(searchTerm);
      history.goTo(`/items?search=${searchTerm}`)
    }
  }, [searchTerm])

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
          <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoFocus value={searchTerm} placeholder="Nunca dejes de buscar" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
      </Header>
      <div className="flex flex-col items-center bg-gray-100">
        <div className="flex container py-4">
          { product.categories.length ?
            <Breadcrumbs>
              {product.categories.map((category) => (<BreadcrumbsItem
              >
                <p>{category}</p>
              </BreadcrumbsItem>))}
            </Breadcrumbs>: null
          }
        </div>
        <div className="flex flex-col container">
          <Detail title={product.item.title} description={product.item.description} image={product.item.picture}>
            <p className="text-xs">{product.item.condition} - 324 vendidos</p>
            <h3 className="text-lg font-semibold">Deco Reverse Sombrero Oxford</h3>
            <h4 className="text-4xl font-normal pt-3 pb-10">
              $ {product.item.price.amount}
            </h4>
            <button className="relative bg-blue-500 text-white w-full px-6 py-2 rounded text-md font-normal overflow-hidden">Comprar</button>
          </Detail>
        </div>
      </div>
    </div>
  );
}

export default Details;
