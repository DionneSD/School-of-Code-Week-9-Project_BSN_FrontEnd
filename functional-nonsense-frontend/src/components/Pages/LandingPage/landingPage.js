import React from 'react';
import './landingPage.css';

export default function LandingPage() {
  return (
    <div>
      <h1>bootcamper support network</h1>
      <figure className="image">
        <img id="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" alt="insert here"/>
      </figure>
      <div className="about-box">
        <h2>about us</h2>
        <h3>welcome to the bootcamper support network!</h3>
        <p>this website was created to enable tech bootcampers around the world to connect with each other and help each other learn. it has purposefully been designed to be as accessible as possible.</p>
        <p>we encourage you to join our community and provide as much or as little information about yourself as you are comfortable with.</p>
        <p>as bootcampers ourselves, we know how stressful and intensive these courses can be, and we hope that this site allows you to make connections with people who are going through similar things and enables you to help each other as much as we have been helped by our fellows from bootcamps past and present!</p>
        <p></p>
      </div>
    </div>
  )
};
