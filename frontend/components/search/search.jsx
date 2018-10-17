import React from 'react';
import FilterForm from './filter_form';
import QuestionIndex from './question_index';
import { Link } from 'react-router-dom';
import RenderSplash from '../splash/render_splash';
import AsideNav from '../nav/aside_nav';


class Search extends React.Component {

  // { questions, limit, user, updateFilter }

  componentDidMount(){
    this.props.updateFilter({limit: this.props.limit});
  }




  render(){
    return (
      <div>
        <RenderSplash user={this.props.user} />
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
export default Search;
