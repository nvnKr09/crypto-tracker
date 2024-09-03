import React from 'react';
import './styles.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = ({search, onSearchChange}) => {
  return (
    <div className='search-flex'>
        <SearchRoundedIcon className='search-icon' />
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