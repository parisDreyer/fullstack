import React from 'react';
import SplashSignupContainer from './splash_container';




const RenderSplash = ({user}) => {
  console.log(user);
  if(!user) //&& window.location.toString().match(/\/#\/.*$/)[0] === "/#/")
  {
    return (
      <div className="old-hero">
        <div className="splash-explanation-text">
          <h3>Learn, Share, Build</h3>
          <p>
            Each month, over 50 million denizens come to Stack Inferno to learn, share
            their knowledge, and maunder through eternity. Join the world’s largest denizen
            community.
          </p>
        </div>
        <div className="old-hero-background"></div>
        <SplashSignupContainer />
      </div>

    );
  } else return (<div></div>);
}

export default RenderSplash;
