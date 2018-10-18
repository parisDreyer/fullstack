import React from 'react';
import {withRouter} from 'react-router-dom';

import FilterForm from '../search/filter_form';
import { Link } from 'react-router-dom';


class QuestionIndexFooter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      limit: this.props.limit,
      offset: this.props.offset,
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

  button_range(length){
    let biteSize = this.state.limit;
    let pos = this.state.offset;
    // const container = new Array(Math.floor(length / biteSize));


    // return Array.from(container).map((el, index) =>
    //   <button>{biteSize * index} - {(index + 1) * biteSize}</button>
    // );
    if(length <= biteSize) return (<div></div>);

    const first = pos < biteSize ?
      <li className="current"><button>1 - {biteSize}</button></li>
      : <li><button>1 - {biteSize}</button></li>
    const aftrFirst = pos > biteSize ?
      <li className="current"><button>{pos - biteSize} - {pos}</button></li> : null;
    const second = (pos + biteSize + 1 < length) ?
      <li><button>{pos + biteSize + 1} - {pos + (2*biteSize)}</button></li> : null;
    const last = (length - biteSize > pos) ?
      <li><button>{length - biteSize} - {length}</button></li> : null;
    const buffer = last ? <li>...</li> : null;
    return (
      <ul className="question-index-footer">
        {first}
        {aftrFirst}
        {second}
        {buffer}
        {last}
      </ul>
    );
  }

  render(){
    let the_total = this.props.total ? this.props.total : 0;
    return (
      this.button_range(the_total)
    );
  }

}

export default withRouter(QuestionIndexFooter);
