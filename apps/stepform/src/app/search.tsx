import React, {
  useCallback,
} from 'react';
import { Pages } from '@stepform/ui';
import { facade } from '@stepform/store';
import { useHistory } from 'react-router-dom';

function Search() {
  const productsFacade = facade.productsFacade();

  const history = useHistory();
  const historyFacade = useCallback(() => {
    return {
      goTo: (location) => history.push(location),
      getPathname: history.location.pathname || '',
      getSearch: () => (history.location.search || '').replace('?search=', ''),
    };
  }, [history]);

  return <Pages.Search facade={productsFacade} history={historyFacade()} />;
}

export default Search;
