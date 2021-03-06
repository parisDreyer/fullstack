import React from 'react';
import FilterForm from './filter_form';
import QuestionIndex from './question_index';
import { Link } from 'react-router-dom';
import RenderSplash from '../splash/render_splash';
import AsideNav from '../nav/aside_nav';
import RightNav from '../nav/right_nav';

class Search extends React.Component {

  // { questions, limit, user, updateFilter }

  componentDidMount(){
    this.props.updateFilter({limit: this.props.limit});
  }




  render(){
    const the_qs = this.props.questions;
    const the_total = this.props.total ? this.props.questions.total : 0;
    const index = the_qs ? <QuestionIndex questions={the_qs} total={the_total} /> : <div></div>;
    return (
      <div className="full-package">
        <RenderSplash user={this.props.user} />
        <div className="content">
          <AsideNav links={1}/>
          <div className="main-content">
            <div className="header-section">
              <div className="question-index-header">
                <h1>Top Questions</h1>
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

          </div>
          <RightNav links={1}/>
        </div>
      </div>
    );
  }
}
export default Search;
