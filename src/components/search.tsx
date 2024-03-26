import React, { useState } from 'react'
import Character from '../models/character.interface'


interface SearchProps {
    allCharacters: Character[] | null
    filteredCharacters: Character[] | null
    setFilteredCharacters: (characterList: Character[]) => void
}


const Search: React.FC<SearchProps> = ({allCharacters, filteredCharacters, setFilteredCharacters}) => {

    const [busqueda, setBusqueda] = useState('')
    const [filterType, setFilterType] = useState<"name" | "id" | "">("")

    if (allCharacters != null && filteredCharacters != null) {
        const sortByName = () => {
            if (filterType == "name") {
                const newCharList = [...filteredCharacters].reverse()
                setFilteredCharacters(newCharList)
            } else {
                const newCharList = [...filteredCharacters].sort((a, b) => a.name.localeCompare(b.name))
                setFilteredCharacters(newCharList)
                setFilterType("name")
            }
        }
    
        const sortByID = () => {
            if (filterType == "id") {
                const newCharList = [...filteredCharacters].reverse()
                setFilteredCharacters(newCharList)
            } else {
                const newCharList = [...filteredCharacters].sort((a, b) => b.id - a.id).reverse()
                setFilteredCharacters(newCharList)
                setFilterType("id")
            }
        }
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setBusqueda(e.target.value)

            if (e.target.value == "") {
                setFilteredCharacters(allCharacters)
            }
        }

        const filtered = () => {
            const filteredChars = [...allCharacters].filter(characters =>
                characters.name.toLowerCase().includes(busqueda.toLowerCase()
                ))
            setFilteredCharacters(filteredChars)
        }
    
    
      return (
        <div className='search-container'>
            <div className="relative">
                <input placeholder="Busca por el nombre del personaje" type="text" onChange={handleChange} value={busqueda}/>
                <button onClick={filtered} className='btn-search'>Buscar</button>
            </div>
            <div className="btn-container">
                <button onClick={sortByName}>Ordenar Alfabeticamente</button>
                <button onClick={sortByID}>Ordenar por número de ID</button>
            </div>
        </div>
      )
    }
}

export default Search