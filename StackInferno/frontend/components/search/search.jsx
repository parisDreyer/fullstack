import React from 'react';

import FilterForm from './filter_form';
import QuestionIndex from './question_index';
import { Link } from 'react-router-dom';


const Search = ({ questions, limit, updateFilter }) => (
  <div className="main-content">
    <div className="question-index-header">
      <h1>Top Questions</h1>
      <Link to="/questions/new" className="link-button">Ask Question</Link>


    <div className="limit-specs">
      <FilterForm
        limit={limit}
        updateFilter={updateFilter}
        />
    </div>
  </div>
    <QuestionIndex questions={questions} />
  </div>
);

export default Search;
