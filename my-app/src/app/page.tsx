'use client';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
const TopMenu = () => (
  <div className="px-0 justify-content-center pb-2" id="topMenu">
  <div className="navbar">
    <Container fluid>
      <ul className="nav justify-content-start">
        <li><a className="navbar-brand" href="#"><img src="murphyslogowhite.png" width="200px"></img></a></li>
      </ul>
      <ul className="{'nav-links ${isOpen ? 'open' : ''}'} nav justify-content-end">
        <li className="nav-item nav-link">Home
        </li>
        <li className="nav-item nav-link">
          About Us
        </li>
        <li className="nav-item nav-link">St. Patrick&apos;s Day
        </li>
        <li className="nav-item nav-link">
          To Go Ordering
        </li>
        <li className="nav-item nav-link"><i className="bi bi-instagram"></i></li>
        <li className="nav-item nav-link"><i className="bi bi-facebook"></i></li>
        <li className="nav-item nav-link"><i className="bi bi-twitter"></i></li>
      </ul>
    </Container>
  </div>
</div>
);

const MiddleSection = () => (
  <div className="row d-flex align-items-center justify-content-center" id="centerText">
      <div className="col-8 text-center">
        <h1>Now accepting reservations for St Patrick&apos;s Day</h1>
        <h1 className="h1">Please call 808-531-0422 for reservations</h1>
        <h1 className="h1">St Patrick&apos;s Day To-Go Orders can be ordered on our website menu.</h1>
      </div>
  </div>
);

const FooterMenu = () => (
  <footer className="footer mt-auto py-3" id="bottomMenu">
    <Container fluid>
      <div className="row">
        <div className="col">
          Lunch
          <hr/>
          Monday - Friday: 11:00am - 2:30pm<br/>
          Saturday - Sunday: Not open
        </div>
        <div className="col">
          Bar
          <hr/>
          Monday - Friday: From 11:00am to closing<br/>
          Saturday - Sunday: Not open
        </div>
        <div className="col">
          Dinner
          <hr/>
          Monday - Friday: 5:00pm - 9:00pm<br/>
          Saturday - Sunday: Not open
        </div>
      </div>
    </Container>
  </footer>
);

export default function Home() {
  return (
    <main>
      <Container fluid style={{backgroundImage: "url('murphys-new-background.jpeg')"}}>
        <TopMenu/>
        <MiddleSection/>
        <FooterMenu/>
      </Container>
    </main>
  );
}
