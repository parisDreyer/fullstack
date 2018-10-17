import React from 'react';
import { Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import GreetingContainer from '../greeting/greeting_container';



const mapStateToProps = state => ({
  entities: state.entities
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});




class HeaderContainer extends React.Component {

  constructor(props){
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }
  handleSearchClick(e){
    e.preventDefault();
    if(!window.location.toString().includes('questions/')) window.location = `${window.location}questions/`;
  }

  render() {

    const renderNavBarSearch = !this.props.inSearchQs ? (
      <form onSubmit={this.handleSearchClick} className="nav-search-bar-container">
        <input className="nav-search-bar" type="text" />
        <input type="submit" className="search-icon" value="> "/>
      </form>
    ) : (<div></div>);

    return (<header className="nav-bar">
    <ul className="header-nav">
      <li className="header-link">
        <a href="/">
          <div className="logo-container">
            <div className="logo">
              <img src={window.images.logo}
                alt="site header logo is a drawing of the rings of hell
                as described in Dante Alighieri's epic poem Inferno" />
            </div>stack <strong>inferno</strong>
          </div>
        </a>
        {renderNavBarSearch}
      </li>
      <GreetingContainer />
    </ul>
  </header>);
}

}
// <img src={window.images.searchIcon} className="search-icon" alt="Search" />

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);

// <input type="submit" onSubmit={this.handleSearchClick} className="search-icon" value=""/>
