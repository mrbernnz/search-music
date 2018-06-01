import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import Details from './details';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper
  },
  subHeader: {
    textAlign: 'center'
  },
  gridList: {
    width: '80%',
    height: 'auto'
  }
});

const Albums = ({ classes, albums }) => {
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
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader className={classes.subHeader} component="div">
            Search Results
          </ListSubheader>
        </GridListTile>
        {renderAlbums(albums)}
      </GridList>
    </div>
  );
};
export default withStyles(styles)(Albums);
