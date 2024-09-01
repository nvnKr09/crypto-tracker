import React from 'react';
import './styles.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = ({search, onSearchChange}) => {
  return (
    <div className='search-flex'>
        <SearchRoundedIcon style={{fontSize: '1.8rem'}} />
        <input
            type="text"
            placeholder='Search'
            value={search}
            onChange={(e)=> onSearchChange(e)}
        />
    </div>
  )
}

export default Search;