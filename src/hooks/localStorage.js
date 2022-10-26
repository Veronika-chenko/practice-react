import { useState, useEffect } from 'react';
// reusable hook
export function useLocalStorage(key, defaultValue) {
  // #1
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  // #2
  //assign your state by key
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  // #3
  // вернуть 1.состояние и 2.метод для его обновления; array просто, тому що
  // это удобно
  return [state, setState];
};
// #1
// for example (can be useful for difficult logic)
// (key, defaultValue, serialize = JSON.stringify, deserialize = JSON.parse);