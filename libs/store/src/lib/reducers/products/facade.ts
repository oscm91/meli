import { useDispatch, useSelector } from 'react-redux';
import {
  searchProduct,
  getProduct,
} from './actions';

export default () => {
  const products = useSelector((state) => state['products']);
  const dispatch = useDispatch();

  return {
    searchProduct: (name) => dispatch(searchProduct(name)),
    getProduct: (id) => dispatch(getProduct(id)),
    getState: () => products,
  };
};
