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
    this.props.updateFilter('limit', this.state.limit);
    this.props.updateFilter('offset', this.state.offset);
  }



  handleSearchClick(offs){
    // this.setState({ limit: lim });
    this.setState({ offset: offs })
    // this.props.updateFilter('limit', lim);
    this.props.updateFilter('offset', offs)
  }

  button_element(pos, increment){
    return (
      <button onClick={() => this.handleSearchClick(pos)}>
        {pos} - {pos + increment}
      </button>
    );
  }

  button_range(length){
    let biteSize = this.state.limit;
    let pos = this.state.offset;
    let doubl = 2*biteSize;
    if(length <= biteSize) return (<div></div>);

    const first = pos < biteSize ?
    <li className="current">{this.button_element(0, biteSize)}</li>
      : <li>{this.button_element(0, biteSize)}</li>
    const afterFirst = doubl < length ?
      (
        pos >= biteSize && pos < doubl ?
        <li className="current">{this.button_element(biteSize + 1, biteSize)}</li>
          : <li>{this.button_element(biteSize + 1, biteSize)}</li>
      ) : null;


    const beforeCurrent =
        pos - biteSize > doubl ? <li>{this.button_element(pos - biteSize, biteSize)}</li> : null
    const current = pos > doubl ?
      <li className="current">{this.button_element(pos, biteSize)}</li> : null
    const afterCurrent = length > pos + doubl && pos > biteSize ?
      <li>{this.button_element(pos + biteSize + 1, biteSize)}</li> : null

    const last = length > pos + biteSize && length > biteSize ?
      <li>{this.button_element(length - biteSize, biteSize)}</li> : null


    return (
      <ul className="question-index-footer">
        {first}
        {afterFirst}
        {beforeCurrent}
        {current}
        {afterCurrent}
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