import React from 'react'
// import { useState, useEffect } from 'react';
import GetUsers from "../Fetches/fetches.js";

export default function DatabasePage() {

// const [allUsers, setAllUsers] = useState([])

// const getAllUsers = async () => {
//   const response = await fetch ('http://localhost:3001/api/users',{method: "GET"});
//   const data = await response.json()
//   console.log(data)
//   setAllUsers(data)
// }
// getAllUsers();


return (
    <div>
      <h1>DatabasePage</h1>
      <div className="databaseResults">
      <GetUsers id={1} />
        {/* <h3>{setAllUsers.map(()=> {
      return <p>{setAllUsers.data}</p>})}</h3> */}
        {/* <ol>
          <li>Id</li>
          <li>Name</li>
          <li>Learning Style</li>
          <li>Myers Briggs Personality</li>
          <li>Religion</li>
          <li>Cultural Background</li>
          <li>Gender</li>
          <li>Sexuality</li>
          <li>Hobby</li>
          <li>Twitter</li>
          <li>Linked-in</li>
          <li>Facebook</li>
          <li>Slack</li>
          <li>Email</li>
        </ol> */}
      </div>
      <div className="nextStep-buttons">
        <button>Join Community</button>
        
      </div>
    </div>
  )
};
