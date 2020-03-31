import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import useAuth from "./hooks/useAuth";
import LoadingSpinner from "./components/LoadingSpinner";
import { navigate } from "@reach/router";
import firebase from "firebase/app";

import Register from './pages/Register';
import Reregister from './pages/Reregister';
import Confirmation from './pages/Confirmation';
import Home from './pages/Home';
import About from './pages/About';
import Class from './pages/Class';
import Login from './pages/Login';

const App = () => {
  const [user, loading] = useAuth();

  if (loading) {
      return (
        <LoadingSpinner/>
      );
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">St. Andrew Kim Korean School</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/class">Class</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* {
        loading ? <LoadingSpinner type="circle" /> : undefined
      } */}
      <Router>
        <Home path="/"/>
        <Register path="/register" />
        <Confirmation path="confirmation"/>
        <Reregister path="/reregister"/>
        <About path="/about"/>
        <Class path="/class" user={user}/>
        <Login path="/login"/>
      </Router>
      <Container style={{marginTop: '50px'}}>
        <hr/>
        <footer style={{color: 'gray'}}>
          <p style={{fontSize:'13px'}}>© 2020 - St. Andrew Kim Korean School <br/>
          {
            user ? <a href="/" 
            onClick={e=>{
              e.preventDefault();
              firebase.auth().signOut()
                .then(() => navigate("/"));
            }}>Sign out</a> :
            <a href="/login">Login as admin</a> 
          }
          </p>
        </footer>
      </Container>
    </div>
  )
}

export default App;