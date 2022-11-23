import React from 'react'

const { query } = require ("./databaseLink.js")

async function GetUsers(){
    const usersArray = await query ("SELECT * FROM users;");
    return usersArray.rows;
}

export default function DatabasePage() {
  return (
    <div>
      <h1>DatabasePage</h1>
      <div className="databaseResults">
      <GetUsers/>
      </div>
      <div className="nextStep-buttons">
        <button>Join Community</button>
        
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
    </div>
  )
}
