import React from 'react';
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
  const handleFilterClick = (filter) => {
    if (activeFilter === filter) {
      onFilterChange(null);
    } else {
      onFilterChange(filter);
    }
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
        { filter: 'swim-workouts', Icon: GiStairsGoal, label: 'Swim Workouts' },
        { filter: 'training', Icon: GiStopwatch, label: 'Training' },
      ].map(({ filter, Icon, label }) => (
        <FilterItem
          key={filter}
          onMouseEnter={() =>
            (document.querySelector(`#${filter}`).style.visibility = 'visible')
          }
          onMouseLeave={() =>
            (document.querySelector(`#${filter}`).style.visibility = 'hidden')
          }
          onClick={() => handleFilterClick(filter)}
        >
          <FilterIcon>
            <Icon size='1.5em' />
          </FilterIcon>
          <FilterText id={filter}>{label}</FilterText>
        </FilterItem>
      ))}
    </FilterContainer>
  );
};

export default Filter;
