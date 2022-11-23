import React from 'react'
import { useState, useEffect } from 'react';

export default function DatabasePage() {

const [allUsers, setAllUsers] = useState([])
useEffect(()=>{
  const getAllUsers = async () => {
    const response = await fetch ('http://localhost:3001/api/users',{method: "GET"});
    const data = await response.json()
    console.log(data.payload)
    setAllUsers(data.payload)
  }
  getAllUsers();
}, [])

  return (
    <div>
      <h1>bootcamper database:</h1>
      <div className="databaseResults">
      {allUsers.map((user, i)=> {
      return <li key={i}>Learning Style: {user.learning_style}</li>
      })}
      {allUsers.map((user, i)=> {
      return <li key={i}>Myers-Briggs Personality: {user.mb_personality}</li>
      })}
      {allUsers.map((user, i)=> {
      return <li key={i}>Religion: {user.religion}</li>
      })}
      {allUsers.map((user, i)=> {
      return <li key={i}>Cultural Background: {user.cultural_background}</li>
      })}
      {allUsers.map((user, i)=> {
      return <li key={i}>Gender Identity: {user.gender_id}</li>
      })}
      {allUsers.map((user, i)=> {
      return <li key={i}>Sexuality: {user.sexuality}</li>
      })}
      {allUsers.map((user, i)=> {
      return <li key={i}>Hobby: {user.hobby}</li>
      })}
      </div>
    
    </div>
  )
}



// import React from 'react'
// import GetUsers from "../Fetches/fetches.js";

// export default function DatabasePage() {

// return (
//     <div>
//       <h1>DatabasePage</h1>
//       <div className="databaseResults">
//       <GetUsers id={1} />
//         {/* <h3>{setAllUsers.map(()=> {
//       return <p>{setAllUsers.data}</p>})}</h3> */}
//       </div>
//     </div>
//   )
// };
