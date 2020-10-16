import React from 'react'
import logo from './logo.svg'
import dan from './dan.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import JobHistory from './components/Jobs'



function App() {
  return (
    <Container fluid className="App set1">
      
      {/* <Row className="header justify-content-md-center">
        <Navbar expand="lg">
          <Navbar.Brand className="brand" href="#home">
            Dan Mendoza
            <Button href="mailto:dan@danjmendoza.com">Email</Button> 
              <Button href="https://www.linkedin.com/in/dan-mendoza-bb479813/" target="_blank">LinkedIn</Button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Intro</Nav.Link>
              <Nav.Link href="#interests">Interests</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </Row> */}
      <Row className="hero justify-content-md-center">
        <Col lg="6">
          <Image src={dan} roundedCircle alt="Dan Mendoza" />
           <h1>Dan Mendoza</h1>
           <p>Software Engineer - Exeter CA / <a href="mailto:dan@danjmendoza.com">E-Mail</a> | <a href="https://www.linkedin.com/in/dan-mendoza-bb479813/">LinkedIn</a></p>
         </Col>
      </Row>
      <Row className="intro justify-content-md-center">
        <Col lg="6">
          <h2 className="text-center">Introduction</h2>
          <Row>
            <Col>
              <p>
                I have 15+ years of experience as a software engineer and entrepreneur. I've helped work 
                on taking a legacy code base and implementing new technologies into it. 
              </p>
              <p>Excited in seeing the indusrty develop and muture and to continue learning!</p>
            </Col>
            <Col>
              <h4>Highlights</h4>
              <ul>
                <li>Helped build and implement an on-boarding process to bring on new developers.</li>
                <li>Self Employeed for 5 years building custom web applications for small to medium sized buisnesses.</li>
                <li>Currently Team Lead, Scrum Master and Jack of All Trades Engineer at FocusVision Inc.</li>
              </ul>
            </Col>
          </Row>
          <p>
          </p>
        </Col>
      </Row>
      {/* <Row className="experience justify-content-md-center">
        <Col lg="6">
          <h2 className="text-center">Where I've Worked</h2>
          <p>
            FV
            ValleyDS
            SermonSpice
            DPS Tele
          </p>

          Stuff I've Built
        </Col>
      </Row> */}
      <Row className="interests justify-content-md-center">
        <Col lg="6">
          <h2 className="text-center">Interests</h2>
          <Row>
            <Col>
              Personal Interests
              <ul>
                <li><strong>Reading.</strong> I love to read and love finding nuggets of wisdom from unrelated fields.</li>
                <li><strong>Building.</strong> While software is fun, there is a different satisfaction that comes from working on anything with an engine to woodworking.</li>
                <li><strong>Idea of the Day.</strong> Playing and expirementing with new ideas and technologies combined with random ideas.</li>
                <li><strong>Outdoors.</strong> Any chance to visit the mountains for camping or backpacking is time well spent.</li>
              </ul>
            </Col>
            <Col>
              <h4>Current Position</h4>
              <ul>
                <li>Championed implementing E2E tests.</li>
                <li>Created on-boarding and mentoring program.</li>
                <li>Scurm Master (uncertified).</li>
              </ul>
              <h4>Other Things</h4>
              <ul>
                <li>Backpacked the 35 miles with my 7 year old son in the Sierra Nevadas.</li>
                <li>Build a 15'x15' two story shed from raw materials.</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Row className="contact justify-content-md-center">
        <Col lg="6">
          <h2 className="text-center">Get In Touch</h2>
          
        </Col>
      </Row> */}

      <Row className="footer justify-content-md-center">
        <Col lg="6">
          Copyright &#169; Dan Mendoza 2020
        </Col>
      </Row>
    </Container>
  )
}

export default App
