import { wrap } from 'comlink';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import workerReducer from "../reducers/workerReducer.worker";

const worker = new workerReducer();

let singletonWorker = null;
let singletonBlocker = false;

async function getAsyncReducer() {
  if (!singletonWorker && !singletonBlocker) {
    singletonBlocker = true;
    singletonWorker = await wrap(worker);
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(singletonWorker);
    }, 0);
  });
}

export default getAsyncReducer;
