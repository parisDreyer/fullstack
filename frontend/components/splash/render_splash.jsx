import React from 'react';
import SplashSignupContainer from './splash_container';




const RenderSplash = ({user}) => {
  if(!user) //&& window.location.toString().match(/\/#\/.*$/)[0] === "/#/")
  {
    const bkgrnd = {background: `linear-gradient(
        rgba(0,255,0,0.45),
        rgba(0,0,255,0.45)
        ),url(${window.images.heroBanner})`,
        backgroundSize: 'cover',
      };
    return (
      <div className="old-hero" style={bkgrnd}>
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
