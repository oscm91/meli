import {
  PRODUCTS_SEARCH,
  PRODUCTS_UPDATE,
  PRODUCTS_GET,
} from '../../actions/actionTypes';

export const searchProduct = (name) => {
  const action = async (dispatch, getState, getAsyncReducer) => {

    const data = await fetch(`http://localhost:4200/api/items?search=${name}`)
      .then(response => response.json())

    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: PRODUCTS_SEARCH,
      payload: data,
    });

    dispatch({
      type: PRODUCTS_UPDATE,
      payload: {
        search: tempState.products.search
      },
    });
  };

  action.worker = true;

  return action;
};

export const getProduct = (id) => {
  const action = async (dispatch, getState, getAsyncReducer) => {
    const product = await fetch(`http://localhost:4200/api/items/${id}`)
      .then(response => response.json())

    const description = await fetch(`http://localhost:4200/api/items/${id}/description`)
      .then(response => response.json())

    const categories = await fetch(`http://localhost:4200/api/categories/${product.item.category_id}`)
      .then(response => response.json())

    const asyncReducer = await getAsyncReducer();
    const tempState = await asyncReducer(getState(), {
      type: PRODUCTS_GET,
      payload: {
        ...product,
        categories: categories.categories,
        item: {
          ...product.item,
          description: description.description
        }
      },
    });

    dispatch({
      type: PRODUCTS_UPDATE,
      payload: {
        product: tempState.products.product
      },
    });
  };

  action.worker = true;

  return action;
};
