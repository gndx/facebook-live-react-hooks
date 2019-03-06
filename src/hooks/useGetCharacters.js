import { useState, useEffect } from 'react';

const useGetCharacters = (api) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return characters;
}

export default useGetCharacters;