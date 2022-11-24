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
      <h1 className='h1Bootcamper'>Bootcamper Database:</h1>
        <div className="databaseResults">
          <table className='content-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Twitter</th>
                <th>Linkedin</th>
                <th>Facebook</th>
                
                <th>Email</th>
                <th>Learning Style</th>
                <th>Myers-Brigs Personality</th>
                <th>Religion</th>
                <th>Cultural Background</th>
                <th>Gender Identity</th>
                <th>Sexuality</th>
                <th>Hobby</th>
              </tr>
            </thead>
            <tbody>
          
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
               
                  {/* {allContacts.map((contact, i)=> {return <li key={i}>{contact.twitter}</li>})}
                </td>
                <td>
                  {allContacts.map((contact, i)=> {return <li key={i}>{contact.linked_in}</li>})}
                </td>
                <td>
                  {allContacts.map((contact, i)=> {return <li key={i}>{contact.facebook}</li>})}
                </td>
                {/* <td>
                  {allContacts.map((contact, i)=> {return <li key={i}>{contact.slack}</li>})}
                </td> */}
                {/* <td>{allContacts.map((contact, i)=> {return <li key={i}>{contact.email}</li>})}
                </td>
                <td>{allUsers.map((user, i)=> {return <li key={i}>{user.learning_style}</li>})}</td>
                <td>{allUsers.map((user, i)=> {return <li key={i}>{user.mb_personality}</li>})}</td>
                <td>{allUsers.map((user, i)=> {return <li key={i}>{user.religion}</li>})}</td>
                <td>{allUsers.map((user, i)=> {return <li key={i}>{user.cultural_background}</li>})}</td>
                <td>{allUsers.map((user, i)=> {return <li key={i}>{user.gender_id}</li>})}</td>
                <td>{allUsers.map((user, i)=> {return <li key={i}>{user.sexuality}</li>})}</td>
                <td>{allUsers.map((user, i)=> {return <li key={i}>{user.hobby}</li>})}</td> */}
            </tbody>
          </table>  
     </div>  
    </div>
  )
}