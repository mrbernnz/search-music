import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  }
});

class SearchBar extends Component {
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
    const { classes } = this.props;
    return (
      <form className={classes.container} onSubmit={this.submitHandler}>
        <TextField
          id="search"
          label="Search Albums"
          type="search"
          name="term"
          className={classes.textField}
          margin="normal"
          value={term}
          onChange={this.changeHandler}
        />
      </form>
    );
  }
}

export default withStyles(styles)(SearchBar);
