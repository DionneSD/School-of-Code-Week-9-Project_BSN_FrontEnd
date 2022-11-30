import React from "react";
import { useState, useEffect } from "react";
import "./databasePage.css";

// This function sends requests to the back end and from there to the Elephant SQL databases for the information they have. They send this request once on loading. A stretch goal is to add search functionality to this page.

export default function DatabasePage() {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      const response = await fetch("http://localhost:3001/users", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data.payload);
      setAllUsers(data.payload);
    };
    getAllUsers();
  }, []);

  const [allContacts, setAllContacts] = useState([]);
  useEffect(() => {
    const getAllContacts = async () => {
      const response = await fetch("http://localhost:3001/contacts", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data.payload);
      setAllContacts(data.payload);
    };
    getAllContacts();
  }, []);

// The below return element builds the table that is seen by the viewer when the page loads.

  return (
    <div>
      <h1 className="h1Bootcamper">bootcamper database</h1>
      <div className="databaseResults">
        <table className="content-table">
          <tr>
            <th>name</th>
            <th>twitter</th>
            <th>linkedin</th>
            <th>facebook</th>
            <th>slack</th>
            <th>email</th>
          </tr>

          {allContacts.map((contact, i) => {
            return (
              <tr key={i}>
                <td>{contact.name}</td>
                <td>{contact.twitter}</td>
                <td>{contact.linked_in}</td>
                <td>{contact.facebook}</td>
                <td>{contact.slack}</td>
                <td>{contact.email}</td>
              </tr>
            );
          })}
        </table>
        <table className="users-table">
          <tr>
            <th>learning style</th>
            <th>myers-briggs personality</th>
            <th>religion</th>
            <th>cultural background</th>
            <th>gender identity</th>
            <th>sexuality</th>
            <th>hobby</th>
          </tr>
          {allUsers.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.learning_style}</td>
                <td>{user.mb_personality}</td>
                <td>{user.religion}</td>
                <td>{user.cultural_background}</td>
                <td>{user.gender_id}</td>
                <td>{user.sexuality}</td>
                <td>{user.hobby}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
