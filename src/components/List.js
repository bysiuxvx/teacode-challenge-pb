import React from 'react';
import User from './User';

const style = {
  width: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

function List(props) {
  const { userList, changeActive, search } = props;

  return (
    <div className="list-container" style={style}>
      {userList &&
        userList
          .filter(
            (user) =>
              user.first_name.toLowerCase().includes(search.toLowerCase()) ||
              user.last_name.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <User key={user.id} user={user} changeActive={changeActive} />
          ))}
    </div>
  );
}

export default List;
