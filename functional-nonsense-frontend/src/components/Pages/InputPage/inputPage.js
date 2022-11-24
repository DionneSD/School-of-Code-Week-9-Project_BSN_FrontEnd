import { useState } from 'react';
import "./inputPage.css";

export default function InputPage() {

const [name, setName] = useState('');
const [twitter, setTwitter] = useState('');
const [linkedIn, setLinkedIn] = useState('');
const [facebook, setFacebook] = useState('');
const [slack, setSlack] = useState('');
const [email, setEmail] = useState('');

const [learningStyle, setLearningStyle] = useState('');
const [mbPersonality, setMbPersonality] = useState('');
const [religion, setReligion] = useState('');
const [culturalBackground, setCulturalBackground] = useState('');
const [genderId, setGenderId] = useState('');
const [sexuality, setSexuality] = useState('');
const [hobby, setHobby] = useState('');


// submit button functions here:
const handleContactsSubmit = () => {
   const data = {
        name: name,
        twitter: twitter,
        linked_in: linkedIn,
        facebook: facebook,
        slack: slack,
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

const handleUsersSubmit = () => {
  const user = {
      learning_style: learningStyle,
      mb_personality: mbPersonality,
      religion: religion,
      cultural_background: culturalBackground,
      gender_id: genderId,
      sexuality: sexuality,
      hobby: hobby
  }
  console.log(user);
  fetch ('http://localhost:3001/users', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
  })
}

//contact-details functions here:
const handleNameChange = (e) => {
  setName(e.target.value);
}

const handleTwitterChange = (e) => {
  setTwitter(e.target.value);
}

const handleLinkedInChange = (e) => {
  setLinkedIn(e.target.value);
}

const handleFacebookChange = (e) => {
  setFacebook(e.target.value);
}

const handleSlackChange = (e) => {
  setSlack(e.target.value);
}

const handleEmailChange = (e) => {
    setEmail(e.target.value);
}

//users functions here:
const handleLearningStyleChange = (e) => {
  setLearningStyle(e.target.value);
}

const handlembPersonalityChange = (e) => {
  setMbPersonality(e.target.value);
}

const handleReligionChange = (e) => {
  setReligion(e.target.value);
}

const handleCulturalBackgroundChange = (e) => {
  setCulturalBackground(e.target.value);
}

const handleGenderIdChange = (e) => {
  setGenderId(e.target.value);
}

const handleSexualityChange = (e) => {
  setSexuality(e.target.value);
}

const handleHobbyChange = (e) => {
  setHobby(e.target.value);
}

return (
  <section>
  <div>
    <h1 className="h1">Join our community</h1>
    <div className='input-container'>
      <form className="form-details">
        <h3>Enter your contact details</h3>
        <input type="text" value={name} onChange={handleNameChange} id="name" placeholder="name?"></input>
        <input type="text" value={twitter} onChange={handleTwitterChange} id="twitter" placeholder="twitter?"></input>
        <input type="text" value={linkedIn} onChange={handleLinkedInChange} id="linked-in" placeholder="linked-in?"></input>
        <input type="text" value={facebook} onChange={handleFacebookChange} id="facebook" placeholder="facebook?"></input>
        <input type="text" value={slack} onChange={handleSlackChange} id="slack" placeholder="slack?"></input>
        <input type="text" value={email} onChange={handleEmailChange} id="email" placeholder="email?"></input>
      </form>
      <form className="form-details">
        <h3>Tell us about you</h3>
        <input type="text" value={learningStyle} onChange={handleLearningStyleChange} id="learning-style" placeholder="learning style?"></input>
        <input type="text" value={mbPersonality} onChange={handlembPersonalityChange} id="mb-personality" placeholder="myers-briggs personality type?"></input>
        <input type="text" value={religion} onChange={handleReligionChange} id="religion" placeholder="what's your religion?"></input>
        <input type="text" value={culturalBackground} onChange={handleCulturalBackgroundChange} id="cultural-background" placeholder="cultural backgroud?"></input>
        <input type="text" value={genderId} onChange={handleGenderIdChange} id="gender-id" placeholder="gender identity?"></input>
        <input type="text" value={sexuality} onChange={handleSexualityChange} id="sexuality" placeholder="sexuality?"></input>
        <input type="text" value={hobby} onChange={handleHobbyChange} id="hobby" placeholder="hobby?"></input>
      </form>
    </div>
      <button className="button" id="submit" onClick={()=> {handleContactsSubmit(); handleUsersSubmit()}}>Submit</button>
  </div>
  
  </section>
)

};