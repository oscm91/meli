import {
  PRODUCTS_UPDATE,
  PRODUCTS_SEARCH,
  PRODUCTS_GET,
} from '../../actions/actionTypes';

export const initialState = {
  product: {
    author: {},
    categories: [],
    item: {},
  },
  search: {
    author: { name: undefined, lastname: undefined },
    categories: [],
    items: []
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_GET: {
      return {
        ...state,
        product: payload
      };
    }

    case PRODUCTS_SEARCH: {
      return {
        ...state,
        search: payload
      };
    }

    case PRODUCTS_UPDATE: {
      return {
        ...state,
        ...payload
      };
    }

    default: {
      return state;
    }
  }
};
