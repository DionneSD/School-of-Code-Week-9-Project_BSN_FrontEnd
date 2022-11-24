import React from 'react'
import { useState, useEffect } from 'react';

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
      <h1>bootcamper database:</h1>
      <div className="databaseResults">
      {allContacts.map((contact, i)=> {
      return <li key={i}>Name: {contact.name}</li>
      })}
      {allContacts.map((contact, i)=> {
      return <li key={i}>Twitter: {contact.twitter}</li>
      })}
      {allContacts.map((contact, i)=> {
      return <li key={i}>Linked-in: {contact.linked_in}</li>
      })}
      {allContacts.map((contact, i)=> {
      return <li key={i}>Facebook: {contact.facebook}</li>
      })}
      {allContacts.map((contact, i)=> {
      return <li key={i}>Slack: {contact.slack}</li>
      })}
      {allContacts.map((contact, i)=> {
      return <li key={i}>Email: {contact.email}</li>
      })}
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
