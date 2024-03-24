import React from 'react';
import { myref } from '../myfirebase';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Write from '../components/Write';

const About = () => {
  const aboutRef = myref(`About`);
  const yearRef = myref(`Year`);
  return (
    <Container style={{marginTop:'50px'}}>
      <Col><h2>About</h2></Col>
        <Write pageName="About" firebaseRef={yearRef}></Write>
        <br/>
        <Write pageName="About" firebaseRef={aboutRef}></Write>
    </Container>
  )
}

export default About;