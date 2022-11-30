import { useReducer } from 'react';
import "./inputPage.css";

// This function provides user-input information to the back end, and from there to the Elephant SQL database tables.

export default function InputPage() {

// initialise state for reducer
const initialState = {
    name: '',
    twitter: '',
    linkedIn: '',
    facebook: '',
    slack: '',
    email: '',
    learningStyle: '',
    mbPersonality: '',
    religion: '',
    culturalBackground: '',
    genderId: '',
    sexuality: '',
    hobby: ''
};
// reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'name':
            return { ...state, name: action.payload };
        case 'twitter':
            return { ...state, twitter: action.payload };
        case 'linkedIn':
            return { ...state, linkedIn: action.payload };
        case 'facebook':
            return { ...state, facebook: action.payload };
        case 'slack':
            return { ...state, slack: action.payload };
        case 'email':
            return { ...state, email: action.payload };
        case 'learningStyle':
            return { ...state, learningStyle: action.payload };
        case 'mbPersonality':
            return { ...state, mbPersonality: action.payload };
        case 'religion':
            return { ...state, religion: action.payload };
        case 'culturalBackground':
            return { ...state, culturalBackground: action.payload };
        case 'genderId':
            return { ...state, genderId: action.payload };
        case 'sexuality':
            return { ...state, sexuality: action.payload };
        case 'hobby':
            return { ...state, hobby: action.payload };
        default:
            return state;
    }
}
// use reducer
const [state, dispatch] = useReducer(reducer, initialState);

// submit button functions here:
const handleContactsSubmit = () => {
    const data = {
        name: state.name,
        twitter: state.twitter,
        linked_in: state.linkedIn,
        facebook: state.facebook,
        slack: state.slack,
        email: state.email
    }
    console.log(data);
    fetch ('http://localhost:3001/contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
};

const handleUsersSubmit = () => {
    const user = {
        learning_style: state.learningStyle,
        mb_personality: state.mbPersonality,
        religion: state.religion,
        cultural_background: state.culturalBackground,
        gender_id: state.genderId,
        sexuality: state.sexuality,
        hobby: state.hobby
    }
    fetch ('http://localhost:3001/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

};

// return JSX
return (
  <section>
    <h1 className="h1">join our community</h1>
    <div className='input-container'>
    <form className="form-details">
    <h3>enter your contact details</h3>
    <input type="text" value={state.name} onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} id="name" placeholder="Name?"/>
    <input type="text" value={state.twitter} onChange={(e) => dispatch({ type: 'twitter', payload: e.target.value })} id="twitter" placeholder="twitter?" />
    <input type="text" value={state.linkedIn} onChange={(e) => dispatch({ type: 'linkedIn', payload: e.target.value })}  id="linked-in" placeholder="linked-in?"/>
    <input type="text" value={state.facebook} onChange={(e) => dispatch({ type: 'facebook', payload: e.target.value })}  id="facebook" placeholder="facebook?"/>
    <input type="text" value={state.slack} onChange={(e) => dispatch({ type: 'slack', payload: e.target.value })}  id="slack" placeholder="slack?"/>
    <input type="text" value={state.email} onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}  id="email" placeholder="email?"/>
    </form>
    <form className="form-details">
    <h3>tell us about you</h3>
    <input type="text" value={state.religion} onChange={(e) => dispatch({ type: 'religion', payload: e.target.value })} id="religion" placeholder="religion?"/>
    <input type="text" value={state.culturalBackground} onChange={(e) => dispatch({ type: 'culturalBackground', payload: e.target.value })} id="cultural-background" placeholder="cultural background?"/>
    <input type="text" value={state.sexuality} onChange={(e) => dispatch({ type: 'sexuality', payload: e.target.value })} id="sexuality" placeholder="sexuality?"/>
    <input type="text" value={state.hobby} onChange={(e) => dispatch({ type: 'hobby', payload: e.target.value })} id="hobby" placeholder="hobby?"/>
    <label for="learning-style" ></label>
    <select className='inputbox' name="learning-style" onChange={(e) => dispatch({ type: 'learningStyle', payload: e.target.value })} id="learning-style">
    <option  value="" disabled selected>learning style?</option>
      <option value="visual">visual</option>
      <option value="audio">audio</option>
      <option value="reading and writing">reading and writing</option>
      <option value="kinesthetic">kinesthetic</option>
    </select>
    <label for="myers-briggs-personality"></label>
    <select className="inputbox" name="mb-personality" onChange={(e) => dispatch({ type: 'mbPersonality', payload: e.target.value })} id="mb-personality">
    <option value="" disabled selected>myers-briggs?</option>
      <option value="ISTJ">ISTJ</option>
      <option value="ISTP">ISTP</option>
      <option value="ISFJ">ISFJ</option>
      <option value="ISFP">ISFP</option>
      <option value="INFJ">INFJ</option>
      <option value="INFP">INFP</option>
      <option value="INTJ">INTJ</option>
      <option value="INTP">INTP</option>
      <option value="ESTP">ESTP</option>
      <option value="ESTJ">ESTJ</option>
      <option value="ESFP">ESFP</option>
      <option value="ESFJ">ESFJ</option>
      <option value="ENFP">ENFP</option>
      <option value="ENFJ">ENFJ</option>
      <option value="ENTP">ENTP</option>
      <option value="ENTJ">ENTJ</option>
    </select>
    <label for="gender-id"></label>
    <select className='inputbox' name="gender-id" onChange={(e) => dispatch({ type: 'genderId', payload: e.target.value })} id="gender-id">
    <option value="" disabled selected>gender identity?</option>
      <option value="agender">agender</option>
      <option value="man">man</option>
      <option value="woman">woman</option>
      <option value="genderfluid">genderfluid</option>
      <option value="genderqueer">genderqueer</option>
      <option value="non-binary">non-binary</option>
    </select>
    </form>
  </div>
  <div>
    <button className="button" id="submit" onClick={()=> {handleContactsSubmit(); handleUsersSubmit()}}>submit</button>
  </div>
  </section>
);
}

                                

