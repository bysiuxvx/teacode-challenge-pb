import React from 'react';
import User from './User';

function UserList() {
  return (
    <>
      <div className="list">
        <div className="header">
          <h1>Contacts</h1>
        </div>
        <User />
      </div>
    </>
  );
}

export default UserList;
