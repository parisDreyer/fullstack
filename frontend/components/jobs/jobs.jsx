import React from 'react';
import AsideNav from '../nav/aside_nav';

const Jobs = () => (
  <div className="content">
    <AsideNav links={1}/>
    <div className="main-content">
      <div className="center-text-page">

        <div><img src={`${window.images['botticelli']}`} height="84" width="84"/></div>
        <h1>Check Back For More Details</h1>
        <h2>Updates Are Posted Eternally</h2>
        <h3>If You Are Serious About Working Here...</h3>
        <h4>You Will Get Your Wish.... </h4>
      </div>
    </div>
  </div>
);

export default Jobs;
