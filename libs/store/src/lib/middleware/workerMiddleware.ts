function createWorkerMiddleware(getAsyncReducer) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      if (typeof action === 'function' && action.worker) {
        return action(dispatch, getState, getAsyncReducer);
      }

      return next(action);
    };
}

const workerMiddleware: ({
  dispatch,
  getState,
}: {
  dispatch: any;
  getState: any;
}) => (next) => (action) => any = createWorkerMiddleware(() => undefined);

export {
  workerMiddleware as default,
  createWorkerMiddleware as withAsyncReducer,
};
