import React, { useState ,useEffect } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

const GifListContainer = () => {
    const [gifs, setGifs] = useState([])
    const [search, setSearch] = useState("Unicorn")

    const api_key = '9q6DaIwgkWLdR4BM2V3KFeY5t7pUDq7n'

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}&limit=10`)
        .then(res => res.json())
        .then(data => {
            setGifs(data.data)
        })
    })



  return (
    <div>
        <GifList gif={gifs}/>
        <GifSearch onSubmitQuery={setSearch}/>
    </div>
  )
}

export default GifListContainer