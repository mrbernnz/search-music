import React from 'react';

export default ({ cover, name, artist, year }) => {
  return (
    <div>
      <img src={cover} alt="Album Cover" />
      <h3>{name}</h3>
      <h3>{artist}</h3>
      <h3>{year}</h3>
    </div>
  );
};
