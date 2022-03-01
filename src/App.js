// src/App.js
import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";


function App() {
  let contactListFive = contacts.slice(0, 5)
  const [contactList, setContacts] = useState(contactListFive)

  function createRandom() {
    let randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIndex]
    setContacts(contactList => [...contactList, randomContact])
  }

  function sortByName() {
    const sorted = contactList.slice().sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0
    })
    setContacts(sorted);
  }
  
  function sortByPopularity() {
    const sorted = contactList.slice().sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0
    })
    setContacts(sorted)
  }

  function deleteContactById(id){
    setContacts(contactList.filter(contact => contact.id !==id))
  }



  return <div className="App">
    <h1>CONTACTS</h1>
    <button onClick={createRandom}>Random contact</button>
    <button onClick={sortByName}>Sort by name</button>
    <button onClick={sortByPopularity}>Sort by popularity</button>
    <table>
      <thead>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Oscar</th>
        <th>Emmy</th>
      </thead>
      <tbody >
        {contactList.map((contact) => (
          <tr key={contact.id}>
            <td><img className="App-logo img" src={contact.pictureUrl} alt="profilepic" /></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? <p>🏆</p> : <p></p>}</td>
            <td>{contact.wonEmmy ? <p>🏆</p> : <p></p>}</td>
            <td><button onClick={()=>deleteContactById(contact.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>;
}
export default App;