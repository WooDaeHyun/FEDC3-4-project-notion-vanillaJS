import { ERROR_MESSAGE } from '../constants.js';
import { checkLocalData } from './checkError.js';

export const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {
    throw new Error(ERROR_MESSAGE.NOT_VALID_LOCALDATA, e);
  }
};

export const getLocalStorage = (key) => {
  try {
    const localList = JSON.parse(window.localStorage.getItem(key));

    if (localList) {
      checkLocalData(localList);
      return localList;
    }

    return [];
  } catch (e) {
    throw new Error(ERROR_MESSAGE.NOT_VALID_LOCALDATA, e);
  }
};
