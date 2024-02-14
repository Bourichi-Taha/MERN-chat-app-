import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Retrieve the initial value from localStorage if it exists
  const storedValue = localStorage.getItem(key);
  console.log('Stored value:', storedValue);
  const initial = storedValue  ? JSON.parse(storedValue) : initialValue;
  console.log('Initial value:', initial);
  // State to store our value
  const [value, setValue] = useState(initial);

  // Update localStorage when the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
