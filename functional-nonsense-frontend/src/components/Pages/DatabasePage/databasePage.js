import React from 'react'
import { useState, useEffect } from 'react';
import "./databasePage.css"

export default function DatabasePage() {

const [allUsers, setAllUsers] = useState([])
useEffect(()=>{
  const getAllUsers = async () => {
    const response = await fetch ('http://localhost:3001/users',{method: "GET"});
    const data = await response.json()
    console.log(data.payload)
    setAllUsers(data.payload)
  }
  getAllUsers();
}, [])

const [allContacts, setAllContacts] = useState([])
  useEffect(()=>{
    const getAllContacts = async () => {
      const response = await fetch ('http://localhost:3001/contacts',{method: "GET"});
      const data = await response.json()
      console.log(data.payload)
      setAllContacts(data.payload)
    }
    getAllContacts();
  }, [])

  return (
    <div>
      <h1 className='h1Bootcamper'>bootcamper database</h1>
        <div className="databaseResults">
          <table className='content-table'>
            
              <tr>
                <th>Name</th>
                <th>Twitter</th>
                <th>Linkedin</th>
                <th>Facebook</th>
                <th>Slack</th>
                <th>Email</th>
              </tr>
          
                {allContacts.map((contact, i)=> {
                  return<tr key={i}>
                    <td>{contact.name}</td>
                    <td>{contact.twitter}</td>
                    <td>{contact.linked_in}</td>
                    <td>{contact.facebook}</td>
                    <td>{contact.slack}</td>
                    <td>{contact.email}</td>
                    </tr>
                  })}
</table>
<table className='users-table'>
<tr>
                <th>Learning Style</th>
                <th>Myers-Brigs Personality</th>
                <th>Religion</th>
                <th>Cultural Background</th>
                <th>Gender Identity</th>
                <th>Sexuality</th>
                <th>Hobby</th>
              </tr>
                  {allUsers.map((user, i)=> {
                  return<tr key={i}>
                    <td>{user.learning_style}</td>
                    <td>{user.religion}</td>
                    <td>{user.mb_personality}</td>
                    <td>{user.cultural_background}</td>
                    <td>{user.gender_id}</td>
                    <td>{user.sexuality}</td>
                    <td>{user.hobby}</td>
                    </tr>
                  })}
          </table>  
     </div>  
    </div>
  )
}