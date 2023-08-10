import React, {useState} from 'react';
// import Button from 'react-bootstrap/Button';

const GifSearch = ({ handleSubmit }) => {
    const [search, setSearch] = useState('');
    
        const handleChange = (e) => {
            e.preventDefault();
            handleSubmit(search);
            setSearch(e.target.value);
        }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label for='search'>Search here!</label>
            <input type='text' name='search' id='search' onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default GifSearch