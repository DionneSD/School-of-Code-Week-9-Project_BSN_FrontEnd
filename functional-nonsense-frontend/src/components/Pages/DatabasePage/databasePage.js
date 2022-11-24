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
          <div className="dataContainer">
            {allContacts.map((contact, i)=> {return <ol>
              <li key={i}>Name: {contact.name}</li>
              <li key={i}>Twitter: {contact.twitter}</li>
            </ol>  
            })}
          </div>
          <div className="dataContainer">
            {allContacts.map((contact, i)=> {return <li key={i}>Twitter: {contact.twitter}</li>})}
          </div>
          <div className="dataContainer">
            {allContacts.map((contact, i)=> {return <li key={i}>Linked-in: {contact.linked_in}</li>})}
          </div>
          <div className='dataContainer'>
            {allContacts.map((contact, i)=> {return <li key={i}>Facebook: {contact.facebook}</li>})}
          </div>
          <div className="dataContainer">
            {allContacts.map((contact, i)=> {return <li key={i}>Slack: {contact.slack}</li>})}
          </div>
          <div className="dataContainer">
            {allContacts.map((contact, i)=> {return <li key={i}>Email: {contact.email}</li>})}
          </div>
          <div className="dataContainer">
            {allUsers.map((user, i)=> {return <li key={i}>Learning Style: {user.learning_style}</li>})}
          </div>
          <div className="dataContainer">
            {allUsers.map((user, i)=> {return <li key={i}>Myers-Briggs Personality: {user.mb_personality}</li>})}
          </div>
          <div className="dataContainer">
            {allUsers.map((user, i)=> {return <li key={i}>Religion: {user.religion}</li>})}  
          </div>
          <div className="dataContainer">
            {allUsers.map((user, i)=> {return <li key={i}>Cultural Background: {user.cultural_background}</li>})}
          </div>
          <div className="dataContainer">
            {allUsers.map((user, i)=> {return <li key={i}>Gender Identity: {user.gender_id}</li>})}
          </div>
          <div className="dataContainer">
            {allUsers.map((user, i)=> {return <li key={i}>Sexuality: {user.sexuality}</li>})}    
          </div>
          <div className="dataContainer">
            {allUsers.map((user, i)=> {return <li key={i}>Hobby: {user.hobby}</li>})}
          </div>
      </div>  
    </div>
  )
}
