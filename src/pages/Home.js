import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Constants from '../constants';

const Home = () => {
  return (
    <div>
        <br/>
        <Alert variant='warning'>&#9432; Classes closed temporarily due to COVID-19</Alert>
        <div className="jumbotron jumbotron-fluid bg-dark text-center">
        <div className="jumbotron-background">
            <img src="../students.jpg" className="blur img-fluid "/>
        </div>
        <div className="container text-white">
            <h1>St. Andrew Kim Korean School</h1>
            <h2>성 김대건 한국 학교</h2><br></br>
            <p>{Constants.year}</p>
            <p><strong>Registration closed</strong></p> 
            <p>
            {/* <Button variant="success" href="/register">등록 | Register</Button> */}
            </p>
        </div>
        </div>
    </div>
  )
}

export default Home;
