import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class Searchbar extends React.Component {
  constructor(props){
    super(props);
    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSibmit = this.onFormSibmit.bind(this);
  }
  onInputChange(event){
    this.setState({ term: event.target.value });
  }
  onFormSibmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' }); //cleaning the search term after using it in a search.
  }
  render() {
    return (
      <form onSubmit={this.onFormSibmit } className='input-group'>
        <input
          placeholder='Enter a city'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <spam className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </spam>
      </form>
    );
  }
}
function mapDispachToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}
//A function passed to 'connect' must always be the second argument.
// The first one is for the 'mapStateToProps'.
export default connect(null, mapDispachToProps)(Searchbar);
