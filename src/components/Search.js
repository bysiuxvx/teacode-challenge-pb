import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 80,
};

const Search = (props) => {
  const { setSearch, userList } = props;

  return (
    <div style={style}>
      <input
        type="text"
        value={props.searchInput}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
