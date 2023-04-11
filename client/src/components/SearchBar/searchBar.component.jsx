import React, { useState } from 'react';
import { useBlogContext } from '../../context/blog.context';
import { FiSearch } from 'react-icons/fi';
import { SearchContainer, SearchInput, SearchButton } from './searchBar.styles';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
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
    <SearchContainer
      onMouseEnter={() => setSearchActive(true)}
      onMouseLeave={() => setSearchActive(false)}
    >
      <SearchInput
        type='text'
        placeholder='Search...'
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
      <SearchButton onClick={handleSearch}>
        <FiSearch />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
