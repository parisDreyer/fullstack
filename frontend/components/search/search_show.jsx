import React from 'react';
import {withRouter} from 'react-router-dom';

import FilterForm from './filter_form';
import QuestionIndex from './question_index';
import { Link } from 'react-router-dom';
import AsideNav from '../nav/aside_nav';




class SearchShow extends React.Component {

  constructor(props){
    super(props);
    this.state = { text: $('input.nav-search-bar').val() };
  }

  componentDidMount(){
    this.props.updateFilter({limit: this.props.limit});
  }

  render(){
    return (
      <div>
        <div className="content">
          <AsideNav links={1}/>
          <div className="main-content">
            <div className="header-section">
              <div className="question-index-header">
                <h1>Top Questions</h1>
                <Link to="/questions/new" className="link-button">Ask Question</Link>
              </div>
              <div className="limit-specs">
                <FilterForm
                  limit={this.props.limit}
                  updateFilter={this.props.updateFilter}
                  />
              </div>
            </div>
            <QuestionIndex questions={this.props.questions} />
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(SearchShow);
