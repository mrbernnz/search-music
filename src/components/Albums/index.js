import React from 'react';
import Details from './details';

export default function Albums({ albums, limit, loadMore }) {
  const renderAlbums = albums =>
    albums.map(album => (
      <Details
        key={album.collectionId}
        cover={album.artworkUrl100}
        name={album.collectionName}
        artist={album.artistName}
        year={new Date(album.releaseDate).getFullYear()}
      />
    ));

  return (
    <div>
      {renderAlbums(albums)}
    </div>
  );
}
