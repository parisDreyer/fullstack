import React from 'react';
import {withRouter} from 'react-router-dom';
import AsideNav from '../nav/aside_nav';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('props in q form', this.props);
    let questionId = this.props.question && this.props.question.id;
    let title = this.props.question && this.props.question.title;
    let body = this.props.question && this.props.question.body;
    this.state={
      categoryId: null,
      questionId: questionId || null,
      userId: this.props.userId,
      title: title || '',
      body: body || '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.question){
      this.setState({ ['title']: nextProps.question.title,
        ['body']:nextProps.question.body})
    }
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
      <div className="content">
        <AsideNav links={1}/>
      <div className="single-question-show">
        <div className="header-section">
          <div className="question-index-header">
            <h1 className="question-title">{this.props.formType} A Question</h1>
          </div>
        </div>
        <div className="question-body">
          {component}
        </div>
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
    this.props.questionAction(formData);
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
              <div className="question-text-input-area">
                <textarea
                  value={body}
                  onChange={this.update('body')}
                  className="question-input-field"
                  />
              </div>
            </label>
            <br />
            <input type="submit" value={`${this.props.formType} Question`}
              className="new-question-button" />
          </form>
        )}
      </div>
    );
  }
}
export default withRouter(QuestionForm);
