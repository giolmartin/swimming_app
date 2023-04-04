import React, { useState } from 'react';
import { useBlogContext } from '../../context/blog.context';
import { SearchContainer, SearchInput, SearchButton } from './searchBar.styles';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const { getSearchResults, updateSearchResults } = useBlogContext();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (searchValue.trim()) {
      console.log('Searching...');
      const results = await getSearchResults(searchValue.trim());
      updateSearchResults(results);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type='text'
        placeholder='Search...'
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
