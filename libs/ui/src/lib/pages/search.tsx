import React  from 'react';
import { Card } from '../card';
import { Header } from '../header';
import { Breadcrumbs, BreadcrumbsItem } from '../breadcrumbs';
import { debounce } from 'lodash';

export interface SearchProps {
  facade: any;
  history: any;
}

export function Search({ facade, history }: SearchProps) {
  const [searchTerm, setSearchTerm] = React.useState(history.getSearch() || '')
  const searchProduct = React.useCallback(debounce((term) => facade.searchProduct(term)), [facade]);

  const { search } = facade.getState() || {
    search: {
      author: { name: undefined, lastname: undefined },
      categories: [],
      items: []
    }
  };

  React.useEffect(() => {
    if (searchTerm !== '') {
      searchProduct(searchTerm);
      history.goTo(`/items?search=${searchTerm}`)
    } else {
      history.goTo('/')
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
          { search.items.length ?
            <Breadcrumbs>
              {search.categories.map((category) => (<BreadcrumbsItem
              >
                <p>{category}</p>
              </BreadcrumbsItem>))}
            </Breadcrumbs>: null
          }
        </div>
        <div className="flex flex-col container gap-y-0.5">
          {search.items.map((value) => {
            return <Card title={value.condition} image={value.picture} onClick={() => history.goTo(`/items/${value.id}`)}>
              <div className="flex gap-2 items-center">
                <h4 className="text-lg font-medium">
                  $ {value.price.amount}
                </h4>
                {value.free_shipping ? <span className='w-3 h-3 block rounded-full bg-green-700'/> : null}
              </div>
              <p className="text-sm pt-3.5">${value.title}</p>
            </Card>
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
