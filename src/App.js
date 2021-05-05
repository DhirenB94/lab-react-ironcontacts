import React from "react";
import "./App.css";
import contactsFromJSON from "./contacts.json";

class App extends React.Component {
  state = {
    contacts: contactsFromJSON.slice(0, 5),
  };

  addRandomActor = () => {
    let newActor = contactsFromJSON[Math.floor(Math.random()*contactsFromJSON.length)];
    this.setState({
      contacts : this.state.contacts.concat(newActor)
    });
  };

  sortPopularity = (popularity) => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => b.popularity - a.popularity)
    });
  };

  sortAlphabetically = (name) => {
    this.setState({
      contacts: this.state.contacts.sort(function (x, y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
      })
    });
  };

  deleteActor = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };


  render() {
    const { contacts } = this.state;

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomActor}>Add a Random Actor</button>
        <button onClick={() => this.sortAlphabetically(contacts.name)}>Sort by Name</button>
        <button onClick={() => this.sortPopularity(contacts.popularity)}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
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
                    <td><button onClick={() => this.deleteActor(contact.id)}>Delete Actor</button></td>
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
