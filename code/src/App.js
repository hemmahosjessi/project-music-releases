import React from 'react'
import data from './data.json'
import Album from './components/Album';
import Header from './components/Header';

console.log(data)

export const App = () => {
  return (
    
    <>
      <Header />

      <section className="grid-container">
      {data.albums.items.map((item) => {
        return <Album
          image = {item.images[1].url} 
          albumLink = {item.external_urls.spotify}
          title = {item.name}
          artistLink = {item.artists[0].external_urls.spotify}
          singer = {item.artists.map((item) => <span key = {item.name}>{item.name}</span> )}
          />
      })}
    
    </section>
    </>
    
  )
}

export default App