import React, { Component } from 'react';

import SearchBar from './containers/Search';
import Albums from './components/Albums';
import './App.css';

class App extends Component {
  state = {
    albums: []
  };

  updateAlbumList = albums => this.setState({ albums });

  render() {
    const { albums } = this.state;
    return (
      <div className="App">
        <SearchBar albums={this.updateAlbumList} />
        <Albums albums={albums} />
      </div>
    );
  }
}

export default App;
