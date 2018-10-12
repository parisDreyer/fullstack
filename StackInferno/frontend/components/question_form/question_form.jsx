import React from 'react';
import {withRouter} from 'react-router-dom';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      categoryId: null,
      userId: this.props.userId,
      title: '',
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
  }

  navigateToSearch() {
    this.props.history.push('/');
  }

  update(property){
    return e => this.setState({
      [property]: e.target.value
    });
  }
  askAQuestion(component){
    return (
      <div className="single-question-show">
        <div className="header-section">
          <div className="question-index-header">
            <h1 className="question-title">Ask A Question</h1>
          </div>
        </div>
        <div className="question-body">
          {component}
        </div>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('question[categoryId]', this.state.categoryId);
    formData.append('question[userId]', this.state.userId);
    formData.append('question[title]', this.state.title);
    formData.append('question[body]', this.state.body);
    this.props.createQuestion(formData);
    this.navigateToSearch();
  }
  render(){
    const { title, body } = this.state;
    return(
      <div className="new-question-container">
        {this.askAQuestion(
          <form onSubmit={this.handleSubmit}>
            <label className="question-field">
              Title
              <br />
              <input
                type="text"
                value={title}
                onChange={this.update('title')}
                className="question-input-field"
                />
            </label>
            <br />
            <label className="question-field">
              Body
              <br />
              <input
                type="text"
                value={body}
                onChange={this.update('body')}
                className="question-input-field"
                />
            </label>
            <br />
            <input type="submit" value="Ask Question"
              className="new-question-button" />
          </form>
        )}
      </div>
    );
  }
}
export default withRouter(QuestionForm);
