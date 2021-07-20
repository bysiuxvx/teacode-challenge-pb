import './App.css';
import React, { useState, useEffect } from 'react';
import List from './components/List';
import Search from './components/Search';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  flexDirection: 'column',
};

const App = () => {
  const [search, setSearch] = useState('');
  const [userList, setUserList] = useState([]);

  const changeActive = (id) => {
    setUserList(
      userList.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            active: !user.active,
          };
        } else {
          return user;
        }
      })
    );
  };

  const URL =
    'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

  useEffect(() => {
    const fetchList = async () => {
      try {
        const request = await fetch(URL);
        let response = await request.json();
        response = response.map((user) => ({ ...user, active: false }));
        response.sort((a, b) =>
          a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0
        );
        setUserList(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchList();
  }, []);

  return (
    <div className="App" style={style}>
      <Search searchInput={search} setSearch={setSearch} />
      <List userList={userList} changeActive={changeActive} search={search} />
    </div>
  );
};

export default App;
