import { useEffect, useState } from "react";

function updateLocalStorage(key, game) {
  const games = getGamesFromStorage(key);
  localStorage.setItem(key, JSON.stringify([...games, game]));
}

function getGamesFromStorage(key) {
  const games = localStorage.getItem(key);
  return games ? JSON.parse(games) : [];
}

const useLocalStorage = (initialValue, key) => {
  const getValue = () => {
    const store = localStorage.getItem(key);
    return store ? JSON.parse(store) : initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export { updateLocalStorage, useLocalStorage };
