import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchUsers } from "./services/api"; // Replace "./api" with the correct path to the "api" module

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers().then((response) => {
      setUsers(response);
    });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by user name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.address.street}, {user.address.suite},{" "}
                  {user.address.city}, {user.address.zipcode}
                  <br />
                  Geolocation: {user.address.geo.lat}, {user.address.geo.lng}
                </td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  {user.company.name}
                  <br />
                  {user.company.catchPhrase}
                  <br />
                  {user.company.bs}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tredgate React Workshop</h1>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App;
