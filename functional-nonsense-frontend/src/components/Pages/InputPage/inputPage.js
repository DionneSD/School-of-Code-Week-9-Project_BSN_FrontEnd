import React, { useEffect } from 'react';
import { useState } from 'react';

export default function InputPage() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');


const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
        name: name,
        email: email
    }
    console.log(data);
    fetch ('http://localhost:3001/contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

const handleNameChange = (e) => {
    setName(e.target.value);
}

const handleEmailChange = (e) => {
    setEmail(e.target.value);
}


  return (
    <section>
    <div>
      <h2>input form title here</h2>
      <form className="contact-details">
      <h3>enter your contact details below</h3>
      <input type="text" value={name} onChange={handleNameChange} id="name" placeholder="what's your name?"></input>
      <input type="twitter" id="twitter" placeholder="twitter handle"></input>
      <input type="email" value={email} onChange={handleEmailChange} id="email" placeholder="what's your email?"></input>
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
      <button className="button" id="submit" onClick={handleFormSubmit}>submit</button>
    </div>
    </section>
  )

};