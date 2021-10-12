import React from 'react'
import data from './data.json'
import Header from './components/Header'
import Album from './components/Album'


console.log(data)

export const App = () => {
  return (
    <section>
      <div>
        <Header 
          siteName="New albums & singles"
        />
        <div className="grid-container">
        {data.albums.items.map((item) => {
        return  <Album 
            img = {item.images[0].url}
            title = {item.name}
            artist = {item.artists.name}
          />
        })}
        </div>
      </div>
    </section>
  )
}

export default App