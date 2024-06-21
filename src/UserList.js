import React, { useState, useEffect } from "react";
import { fetchUsers } from "./services/api";

function UserList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
      setFilteredUsers(users);
    });
  }, []);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    setFilteredUsers(
      users.filter((user) => user.username.toLowerCase().includes(filterValue))
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by username"
        onChange={handleFilterChange}
      />
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
              <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
