import './App.css';
import React, { useEffect, useState } from 'react';
import { SearchInput } from './SearchInput';
import { ImageAnime } from './ImageAnime';

const App = () => {
  const [text, setText] = useState('')
  const [info, setInfo] = useState({})
  const limit = 12;

  useEffect(()=>{
    HandleSearch()
  }, [text])

  const HandleSearch = () => {
    const api = 'https://kitsu.io/api/edge/'

    fetch(`${api}anime?filter[text]=${text}&page[limit]=${limit}`)
    .then(response => response.json())
    .then(resp => { setInfo(resp)})
  }

  

  return (
    <div className='app'>
      <>
      <ImageAnime/>
      <div className='search'>
        <h1>Welcome to our anime page</h1>
        <SearchInput value={text} onChange={(search) => setText(search)} />
      </div>
      <div className='anime'>
        {info.data && (
          <ul className='anime-list'>
            {info.data.map((anime) => (
              <li key={anime.id}>
                <img src={anime.attributes.posterImage.small} alt='anime'/>
                <h1>
                  {anime.attributes.canonicalTitle}
                </h1>
                <h2>
                  {anime.attributes.ageRatingGuide}
                </h2>
                <p>
                  {anime.attributes.synopsis}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      </>
    </div>
  )
}

export default App;