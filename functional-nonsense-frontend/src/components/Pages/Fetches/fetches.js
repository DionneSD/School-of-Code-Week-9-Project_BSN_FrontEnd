import { useState, useEffect } from 'react';

export function GetUsers({id}) {
    let [users, setUsers]= useState("");
  
  useEffect(()=>{
    async function getAllUsers(){
      const response = await fetch(`http://localhost:3001/api/users`);
      const data = await response.json();
      console.log(data);
      setUsers(data);
    }
    getAllUsers()
  }, [ id ])

  return (
    <div className="users-viewer">
      <p> Learning Style: {users.learning_style} </p>
      <p> Myers-Briggs Personality: {users.mb_personality} </p>
      <p> Religion: {users.religion} </p>
      <p> Sexuality: {users.sexuality} </p>
      <p> Hobby: {users.hobby} </p>
    </div>
  )
}