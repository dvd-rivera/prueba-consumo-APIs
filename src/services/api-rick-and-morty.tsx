import React, { useEffect } from 'react';
import axios from 'axios';
import Character from '../models/character.interface';

interface CharacterApiProps {
    setFilteredCharacters: (characterList: Character[]) => void
  setLoading: (value: React.SetStateAction<boolean>) => void
  setAllCharacters: (characterList: Character[]) => void
}

const CharactersApi: React.FC<CharacterApiProps> = ({ setFilteredCharacters, setLoading, setAllCharacters}) => {
  const BASE_URL = 'https://rickandmortyapi.com/api/';

  const fetch = async (parameter: string, characterList: Character[]) => {
    try {
      const response = await axios.get(`${BASE_URL}${parameter}`);
      const newCharacters = response.data.results;
      const updatedCharacterList = [...characterList, ...newCharacters];

      setFilteredCharacters(updatedCharacterList);
      setAllCharacters(updatedCharacterList)
      if (response.data.info.next) {
        let next = response.data.info.next.split("/");
        await fetch(next[next.length - 1], updatedCharacterList);
      } else {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
      }
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  useEffect(() => {
    fetch('character', []);
  }, []);

  return (
    <></>
  );
};

export default CharactersApi;
