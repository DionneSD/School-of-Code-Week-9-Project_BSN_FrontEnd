import React from 'react';
import { useState } from 'react';
export default function InputPage() {
  const [contact, setContact] = useState([{},{},{}]);
  function handleChange(event){
    const newText = event.target.value;
    setContact(newText);
  }
  function handleClick(){
    // submit all the text into the database
    setText("");
}
  /*
Plan: take the inputted text and add it to the database
*/
  return (
    <section>
    <div>
      <h2>input form title here</h2>
      <form className="contact-details">
      <h3>enter your contact details below</h3>
      <input type="text" value={text} onChange={handleChange} id="name" placeholder="what's your name?"></input>
      {/* <input id="twitter" placeholder="twitter here"></input>
      <input id="linked-in" placeholder="linked-in here"></input>
      <input id="facebook" placeholder="facebook here"></input>
      <input id="slack" placeholder="slack here"></input>
      <input id="email" placeholder="email here"></input> */}
      </form>
      <form className="users">
      <h3>tell us about you below </h3>
      <input type="text" id="learning-style" placeholder="what's your learning style?"></input>
      {/* <input id="mb-personality" placeholder="what's your myers-briggs personality type?"></input>
      <input id="religion" placeholder="what's your religion?"></input>
      <input id="cultural-background" placeholder="what's your cultural backgroud?"></input>
      <input id="gender-id" placeholder="what's your gender identity?"></input>
      <input id="sexuality" placeholder="what's your sexuality?"></input>
      <input id="hobby" placeholder="what's your hobby?"></input> */}
      </form>
    </div>
    <div>
      <button className="button" id="submit" onClick={handleClick}>submit</button>
    </div>
    </section>
  )
};