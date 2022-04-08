// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import 'isomorphic-fetch';
import useProducts from './facade';
import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import reducer, { initialState } from '../products/reducer';

jest.mock('../../worker/rootAsyncReducer', () => {
  return () => {
    return Promise.resolve((a, b) => {
      return {
        products: reducer(a.products, b),
      };
    });
  };
});

import { getStore } from '../../store';

describe('products reducer', () => {
  it('should search product', async () => {
    const store: Store<any, any> = getStore({
      products: initialState,
    });
    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper,
    });

    act(() => {
      result.current.searchProduct('air fryer');
    });

    await waitForNextUpdate();

    expect(result.current.getState()).toEqual(expect.objectContaining({
      search: {
        author: expect.any(Object),
        categories: expect.any(Array),
        items: expect.any(Array),
      }
    }));

  });

  it('should get product', async () => {
    const store: Store<any, any> = getStore({
      products: initialState,
    });
    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result, waitForNextUpdate } = renderHook(() => useProducts(), {
      wrapper,
    });

    act(() => {
      result.current.searchProduct('air fryer');
    });

    await waitForNextUpdate();

    expect(result.current.getState()).toEqual(expect.objectContaining({
      search: {
        author: expect.any(Object),
        categories: expect.any(Array),
        items: expect.any(Array),
      }
    }));

    act(() => {
      result.current.getProduct(result.current.getState().search.items[0].id);
    });

    await waitForNextUpdate();

    expect(result.current.getState()).toEqual(expect.objectContaining({
      search: {
        author: expect.any(Object),
        categories: expect.any(Array),
        items: expect.any(Array),
      },
      product: {
        author: expect.any(Object),
        categories: expect.any(Array),
        item: expect.any(Object),
      }
    }));
  });
});
