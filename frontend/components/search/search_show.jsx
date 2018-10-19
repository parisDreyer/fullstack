import React from 'react';
import {withRouter} from 'react-router-dom';

import FilterForm from './filter_form';
import QuestionIndex from './question_index';
import { Link } from 'react-router-dom';
import AsideNav from '../nav/aside_nav';
import QuestionIndexFooterContainer from '../question_index_footer/question_index_footer_container';



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
    this.props.updateFilter('text', this.state.text);
  }

  handleSearchClick(e){
    e.preventDefault();
    this.setState({
      text: e.target.children[0].value
    });
    this.props.updateFilter('text', e.target.children[0].value);
  }

  render(){
    const the_qs = this.props.questions;
    const the_total = this.props.total ? this.props.total : 0;
    const index = the_qs ? <QuestionIndex questions={the_qs} total={the_total} /> : <div></div>;
    const foot = the_qs ? <QuestionIndexFooterContainer total={the_total}  /> : <div></div>;
    return (
      <div>
        <div className="content">
          <AsideNav links={1}/>
          <div className="main-content">
            <div className="header-section">
              <div className="flex-left-col">
                <div className="question-index-header bigger-font">
                  <h1>{this.props.total ? this.props.total : 0} Search Results</h1>
                </div>
                <form onSubmit={this.handleSearchClick} className="main-search-container">
                  <input className="main-search-bar" type="text" />
                  <input type="submit" className="main-search-button" value="search"/>
                </form>
              </div>
              <div className="limit-specs">
                <Link to="/questions/new" className="link-button">Ask Question</Link>
                <FilterForm
                  limit={this.props.limit}
                  updateFilter={this.props.updateFilter}
                  />
              </div>
            </div>
            {index}
            {foot}
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(SearchShow);
