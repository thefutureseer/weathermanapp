import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

export default class SearchBar extends Component{
 constructor(props) {
   super(props);

   this.state={term: ''};
   this.onInputChange = this.onInputChange.bind(this);   
 }

 onInputChange(event) {
   console.log(event.target.value);
   this.setState({ term: event.target.value});
 }

 onFormSubmit(event) {
   event.preventDefault();

//fetching weather data
 }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input placeholder='Get a Five Day Forcast for Your Favorite City'
               className='form-control'
               value={this.state.term}
               onChange={this.onInputChange} />
         <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'> Submit </button>
         </span>
      </form>
    )
  }
}