import React, { Component } from 'react';

import SearchBar from './containers/Search';
import Albums from './components/Albums';
import './App.css';

class App extends Component {
  state = {
    albums: [],
    limitTo: 3
  };

  updateAlbumList = albums => this.setState({ albums });
  loadMore = () => this.setState({ limitTo: this.state.limitTo + 3 });

  render() {
    const { albums, limitTo } = this.state;
    return (
      <div className="App">
        <SearchBar albums={this.updateAlbumList} />
        <Albums albums={albums} limit={limitTo} loadMore={this.loadMore} />
      </div>
    );
  }
}

export default App;
