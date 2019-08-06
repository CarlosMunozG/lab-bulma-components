import Navbar from '../components/Navbar.js';
import FormField from '../components/FormField.js';
import CoolButton from '../components/CoolButton.js';
import React, { Component } from 'react'

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <form>
          <FormField label="name" type="text"/>
          <FormField label="email" type="email"/>
          <FormField label="name" type="password"/>
          <CoolButton name="submit" isDanger className="button is-small" />
        </form>

      </div>
    )
  }
}

export default Signup;
