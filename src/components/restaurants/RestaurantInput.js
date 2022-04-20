import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    })
    event.target.reset();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange} placeholder="Restaurant"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
