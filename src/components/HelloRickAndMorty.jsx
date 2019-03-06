import React from 'react';
import useGetCharacters from '../hooks/useGetCharacters';

const HelloRickAndMorty = () => {
  const API = 'https://rickandmortyapi.com/api/character/';
  const characters = useGetCharacters(API);
  return (
    <div>
      {characters.map(character => (
        <div>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
}

export default HelloRickAndMorty;