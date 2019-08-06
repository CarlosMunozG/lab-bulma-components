import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import Container from './components/Container.js';
import Signup from './components/Signup.js';
import Message from './components/Message.js';
import CoolButton from './components/CoolButton.js';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Container className="container">
        <Signup />
        <Message className="message is-info"/>
      </Container>
      <CoolButton isSmall isDanger>Sign up</CoolButton>
    </div>
  );
}

export default App;
