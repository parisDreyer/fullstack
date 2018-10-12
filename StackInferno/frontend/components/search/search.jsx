import React from 'react';

import FilterForm from './filter_form';
import QuestionIndex from './question_index';

const Search = ({ questions, limit, updateFilter }) => (
  <div className="main-content">
    <div className="limit-specs">
      <FilterForm
        limit={limit}
        updateFilter={updateFilter}
        />
    </div>
    <QuestionIndex questions={questions} />
  </div>
);

export default Search;
