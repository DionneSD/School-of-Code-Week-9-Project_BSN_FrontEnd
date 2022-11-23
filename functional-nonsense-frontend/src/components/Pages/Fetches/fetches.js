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
      <p> {users.sexuality} </p>  
    </div>
  )
}