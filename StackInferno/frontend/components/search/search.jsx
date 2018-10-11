import React from 'react';

import FilterForm from './filter_form';
import QuestionIndex from './question_index';

const Search = ({ questions, limit, updateFilter }) => (
  <div className="search-container">
    <div className="limit-specs">
      <FilterForm
        limit={limit}
        updateFilter={updateFilter}
        />
      <QuestionIndex questions={questions} />
    </div>
  </div>
);

export default Search;
