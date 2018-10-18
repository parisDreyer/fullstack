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

  button_range(length){
    let biteSize = this.state.limit;
    let pos = this.state.offset;
    // const container = new Array(Math.floor(length / biteSize));


    // return Array.from(container).map((el, index) =>
    //   <button>{biteSize * index} - {(index + 1) * biteSize}</button>
    // );
    if(length <= biteSize) return (<div></div>);

    const first = pos < biteSize ?
        <li className="current">
          <button onClick={() => this.handleSearchClick(pos)}>
            1 - {biteSize}
          </button>
        </li>
      : <li>
        <button onClick={() => this.handleSearchClick(biteSize)}>
          1 - {biteSize}
        </button>
      </li>
    const aftrFirst = pos > biteSize ?
      <li className="current">
        <button onClick={() => this.handleSearchClick(pos)}>
          {pos - biteSize} - {pos}
        </button>
      </li> : null;
    const second = (pos + biteSize + 1 < length) ?
      <li>
        <button onClick={() => this.handleSearchClick(pos + (2*biteSize))}>
          {pos + biteSize + 1} - {pos + (2*biteSize)}
        </button>
      </li> : null;
    const last = (length - biteSize > pos) ?
      <li>
        <button onClick={() => this.handleSearchClick(length - biteSize)}>
          {length - biteSize} - {length}
        </button>
      </li> : null;
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
