import React from 'react';
import './landingPage.css';

export default function LandingPage() {
  return (
    <div id="container">
      <h1 class="header">bootcamper support network</h1>
        <figure className="image">
        <img id="image" src="https://media.istockphoto.com/id/1285126883/photo/group-multiracial-friends-having-fun-outdoor-happy-mixed-race-people-taking-selfie-together.jpg?s=612x612&w=0&k=20&c=jZbQHkSHJY45o6UKlr7nt1aJ-sMIMHUNCsVYc6syY3U=" alt="a group of people"/>
      </figure>
        <div className="about-box">
        <h2 class="header">about us</h2>
        <br/>
        <h3 class="header">welcome to the bootcamper support network!</h3>
        <br />
        <p>this website was created to enable tech bootcampers around the world to connect with each other and help each other learn. it has purposefully been designed to be as accessible as possible.</p>
        <br/>
        <p>we encourage you to join our community and provide as much information about yourself as you are comfortable with.</p>
        <br/>
        <p>as bootcampers ourselves, we know how stressful and intensive these courses can be, and we hope that this site allows you to make connections with people who are going through similar things and enables you to help each other as much as we have been helped by our fellows from bootcamps past and present!</p>
        <br/>
        <p>we hope to see you on the social sites and thank you for taking an interest in our little project.</p>
        <br/>
        <p><i>and remember: trans rights are human rights - black lives matter - solidarity forever!</i></p>
      </div>
    </div>
  )
};
