import React, { Component } from 'react';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchBar from './containers/Search';
import Albums from './components/Albums';

const styles = {
  root: {
    flexGrow: 1
  }
};

class App extends Component {
  state = {
    albums: []
  };

  updateAlbumList = albums => this.setState({ albums });

  render() {
    const { albums } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Search Music App
            </Typography>
          </Toolbar>
        </AppBar>
        <SearchBar albums={this.updateAlbumList} />
        <Albums albums={albums} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
