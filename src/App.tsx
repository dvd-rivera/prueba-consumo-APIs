import { useState } from 'react'
import './sass/App.sass'
import Api from './services/api-rick-and-morty'
import CharactersCard from './components/characters-card'
import Search from './components/search'
import Loading_screen from './components/loading-screen'
import Character from './models/character.interface'

function App() {

  const [filteredCharacters, setFilteredCharacters] = useState<Character[] | null>([])
  const [allCharacters, setAllCharacters] = useState<Character[] | null>([])

  const [loadingState, setLoading] = useState(true)

  return (
    <div className='main-container'>
        <div className="header">
            <img className='home-brand' src="src\assets\img\Rick-And-Morty-Emblema.webp" alt="" />
            <Search setFilteredCharacters={setFilteredCharacters} filteredCharacters={filteredCharacters} allCharacters={allCharacters}></Search>
        </div>
        <CharactersCard filteredCharacters={filteredCharacters}></CharactersCard>
        <Api setFilteredCharacters={setFilteredCharacters} setLoading={setLoading} setAllCharacters={setAllCharacters}></Api>
        {loadingState && <Loading_screen></Loading_screen>}
    </div>
  )
}

export default App