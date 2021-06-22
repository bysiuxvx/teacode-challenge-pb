import React from 'react';

const User = (props) => {
  const { user, changeChecked } = props;

  return (
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
  );
};

export default User;
