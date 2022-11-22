import React from 'react';
import './landingPage.css';

export default function LandingPage() {
  return (
    <div>
      <h1>Bootcamp Support Network</h1>
      <figure className="image">
        <img id="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" alt="insert here"/>
      </figure>
      <div className="about-box">
        <h2>about us will go here</h2>
        <p>text here about the website</p>
      </div>
      <div>
        <button className="button" id="join-community">join community</button>
        <button className="button" id="access-database">access database</button>
      </div>
    </div>
  )
};
