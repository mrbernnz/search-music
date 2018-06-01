import React, { Component } from 'react';
import axios from 'axios';

export default class SearchBar extends Component {
  state = {
    term: ''
  };

  changeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  fetchAlbums = async term => {
    const url = `https://itunes.apple.com/search?term=${term}&country=us&media=music&entity=album`;

    try {
      const res = await axios.get(url);
      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  };

  submitHandler = e => {
    const { term } = this.state;
    e.preventDefault();
    this.fetchAlbums(term).then(results => this.props.albums(results));
    this.setState({ term: '' });
  };

  render() {
    const { term } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input type="search" value={term} onChange={this.changeHandler} />
      </form>
    );
  }
}
