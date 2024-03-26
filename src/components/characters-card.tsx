import React from 'react'
import Character from '../models/character.interface'

interface CharactersCardProps {
    filteredCharacters: Character[] | null
}

const CharactersCard: React.FC<CharactersCardProps> = ({ filteredCharacters }) => {

    // useEffect( () => {
    //     console.log("cambio")
    // },[filteredCharacters ])

    if (filteredCharacters != null) {
        return (
          <div className='character-cards-container'>
            {filteredCharacters.map((char) => (
              <div className='character-card' key={char.id}>
                  <div className="card-header">
                      <p className="name">{char.name}</p>
                      <p className="number">{char.id}</p>
                  </div>
                  <img src={char.image} alt=""/>
              </div>
            ))}
          </div>
        )
    }
}

export default CharactersCard