import React from 'react';

import {
  PaginationContainer,
  PageButton,
  PageNumber,
} from './pagination.styles';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  activeFilter,
}) => {
  const createPageButtons = () => {
    const range = 3;
    const buttons = [];
    let start = Math.max(1, currentPage - range / 2);
    let end = Math.min(totalPages, currentPage + Math.floor(range / 2));

    if (end - start < range) {
      if (currentPage < totalPages / 2) {
        end = Math.min(totalPages, start + range - 1);
      } else {
        start = Math.max(1, end - range + 1);
      }
    }

    for (let i = start; i <= end; i++) {
      buttons.push(
        <PageButton
          key={i}
          onClick={() => onPageChange(i)}
          active={i === currentPage}
          disabled={activeFilter !== 'all'}
        >
          <PageNumber> {i}</PageNumber>
        </PageButton>
      );
    }
    if (end < totalPages) {
      buttons.push(<span key='ellipsis'>... </span>);
      buttons.push(
        <PageButton
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          disabled={activeFilter !== 'all'}
        >
          <PageNumber>{totalPages}</PageNumber>
        </PageButton>
      );
    }
    return buttons;
  };

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || activeFilter !== 'all'}
      >
        Previous
      </PageButton>
      {createPageButtons()}
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || activeFilter !== 'all'}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
