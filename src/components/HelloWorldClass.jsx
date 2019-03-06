import React, { Component } from 'react';

class HelloWorldClass extends Component {
  state = {
    active: true,
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Ocultar
        </button>
        {this.state.active &&
          <h1>Hola Mundo</h1>
        }
      </div>
    );
  }
}

export default HelloWorldClass;