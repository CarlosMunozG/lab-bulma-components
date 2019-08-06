import React, { Component } from 'react'

class Container extends Component {
  render() {
    return (
      <main className={this.props.className}>{this.props.children}</main>
    )
  }
}

export default Container;
