import React from "react";
import "./App.css";
import contactsFromJSON from "./contacts.json";

class App extends React.Component {
  state = {
    contacts: contactsFromJSON.slice(0, 5),
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <tr>
                  <td>
                    <img src={contact.pictureUrl} className="image" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
