import React from 'react';
import Container from 'react-bootstrap/Container';
import {Tab, Row, Col, Nav } from 'react-bootstrap';
import Constants from '../constants';
import ClassPage from '../components/ClassPage';

const Class = (user) => {
  return (
    <Container style={{marginTop:'50px'}}>
       <Tab.Container id="left-tabs-example" defaultActiveKey="유치가">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {
                Constants.classes.map(className => (
                  <Nav.Item>
                    <Nav.Link eventKey={className}>{className}</Nav.Link>
                  </Nav.Item>
                ))
              }
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {
                Constants.classes.map(className => (
                  <Tab.Pane eventKey={className}>
                     <ClassPage obj={user} className={className}></ClassPage>
                  </Tab.Pane>
                ))
              }
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}

export default Class;