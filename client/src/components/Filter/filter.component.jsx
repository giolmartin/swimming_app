import React, { useState } from 'react';
import {
  GiMeal,
  GiRunningShoe,
  GiStairsGoal,
  GiStopwatch,
} from 'react-icons/gi';
import { TbSwimming, TbSalad } from 'react-icons/tb';
import {
  FilterContainer,
  FilterItem,
  FilterIcon,
  FilterText,
} from './filter.style';

const Filter = ({ activeFilter, onFilterChange }) => {
  const [hoveredFilter, setHoveredFilter] = useState(null);

  const handleFilterClick = (filter) => {
    // if (activeFilter === filter) {
    //   onFilterChange(null);
    // } else {
    onFilterChange(filter);
    // }
  };

  const handleMouseEnter = (filter) => {
    setHoveredFilter(filter);
  };

  const handleMouseLeave = () => {
    setHoveredFilter(null);
  };

  return (
    <FilterContainer>
      {[
        {
          filter: 'all',
          Icon: TbSalad,
          label: 'All',
        },
        {
          filter: 'technique',
          Icon: TbSwimming,
          label: 'Technique',
        },
        { filter: 'nutrition', Icon: GiMeal, label: 'Nutrition' },
        { filter: 'gear', Icon: GiRunningShoe, label: 'Gear' },
        { filter: 'fitness', Icon: GiStairsGoal, label: 'Fitness' },
        { filter: 'training', Icon: GiStopwatch, label: 'Training' },
        { filter: 'open-water', Icon: GiStopwatch, label: 'Open Water' },
      ].map(({ filter, Icon, label }) => (
        <FilterItem
          key={filter}
          onClick={() => handleFilterClick(filter)}
          onMouseEnter={() => handleMouseEnter(filter)}
          onMouseLeave={handleMouseLeave}
        >
          <FilterIcon>
            <Icon size='1.5em' />
          </FilterIcon>
          {hoveredFilter === filter && <FilterText>{label}</FilterText>}
        </FilterItem>
      ))}
    </FilterContainer>
  );
};

export default Filter;
