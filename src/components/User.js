import React from 'react';

const style = {
  body: {
    display: 'flex',
    backgroundColor: 'lightgray',
    margin: 5,
    width: '100%',
    padding: '0 10px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  img: { display: 'inline-block', padding: 5, maxWidth: '80px' },
  textContainer: {
    display: 'inline-block',
    width: '220px',
  },
};

function User(props) {
  const { user, changeActive } = props;

  return (
    <div style={style.body} onClick={() => console.log(user.id, user.active)}>
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name} avatar`}
        style={style.img}
      />
      <div className="textContainer" style={style.textContainer}>
        <p>
          <strong>
            {user.first_name} {user.last_name}
          </strong>
        </p>
      </div>
      <input
        type="checkbox"
        checked={user.active}
        onChange={(event) => changeActive(user.id)}
      />
    </div>
  );
}

export default User;
