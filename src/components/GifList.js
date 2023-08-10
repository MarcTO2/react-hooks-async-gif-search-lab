import React from 'react'

const GifList = ({ gifs }) => {
  return (
    <ul>
        {gifs.map( gif => {
            return (
                <li key={gif.images.original.url}>
                    <img src={gif.images.original.url} alt={gif.url}/>
                </li>
            )
})}
    </ul>
  )
}

export default GifList