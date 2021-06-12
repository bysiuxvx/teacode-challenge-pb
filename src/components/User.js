import React, { useState, useEffect } from 'react';

function User() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState();
  const [checkedUsers, setCheckedUsers] = useState('');

  const API =
    'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await fetch(API);
        const userData = await result.json();
        userData.sort(function (a, b) {
          if (a.last_name.toLowerCase() < b.last_name.toLowerCase()) return -1;
          if (a.last_name.toLowerCase() > b.last_name.toLowerCase()) return 1;
          else return;
        });
        setUsers(userData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(search.toLowerCase()) ||
          user.last_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [users, search]);

  useEffect(() => {
    setCheckedUsers(users.filter((user) => user.active));
  }, [users]);

  const changeChecked = (id) => {
    users.map((user) => {
      if (user.id === id) {
        console.log(user);
        if (user.active === undefined || user.active === false) {
          user.active = true;
        } else user.active = false;
      }
    });
    setUsers(users);
    console.log(checkedUsers);
  };

  return (
    <div className="list-container">
      <div className="search">
        <input
          type="text"
          placeholder="Search for users"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      {filteredUsers &&
        filteredUsers.map((user) => (
          <div
            className="user-block"
            key={user.id}
            onClick={() => console.log(user.id, user.active)}>
            <div className="avatar">
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name} avatar`}
              />
            </div>
            <div className="details">
              <h5>
                {user.first_name} {user.last_name}
              </h5>
              <p>{user.email}</p>
            </div>
            <input
              type="checkbox"
              checked={user.active}
              onClick={(event) => changeChecked(user.id)}
            />
          </div>
        ))}
    </div>
  );
}

export default User;
