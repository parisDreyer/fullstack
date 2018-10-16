import React from 'react';
import {withRouter} from 'react-router-dom';

import FilterForm from './filter_form';
import QuestionIndex from './question_index';
import { Link } from 'react-router-dom';
import AsideNav from '../nav/aside_nav';




class SearchShow extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      limit: this.props.limit,
      offset: this.props.offset,
      text: $('input.nav-search-bar').val()
    };

    this.handleSearchClick = this.handleSearchClick.bind(this);

  }

  componentDidMount(){
    this.props.updateFilter(
      'text', this.state.text
      // limit: this.props.limit,
      // text: this.state.text,
      // offset: this.props.offset,
    );
  }

  handleSearchClick(e){
    e.preventDefault();
    this.setState({
      text: e.target.children[0].value
    });
    this.props.updateFilter('text', e.target.children[0].value
      // limit: this.state.limit,
      // offset: this.state.offset
    );
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
                <form onSubmit={this.handleSearchClick} className="nav-search-bar-container">
                  <input className="nav-search-bar" type="text" />
                  <input type="submit" className="search-icon" value="> "/>
                </form>
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
