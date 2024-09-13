import React, { useState } from "react";
import './SideNav.css';
import { Button, Offcanvas } from "react-bootstrap";


function SideNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  variant="" onClick={handleShow}>
        <div className="hamburger">
          <div className="line first-line"></div>
          <div className="line second-line"></div>
        </div>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Side Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-1">
            <li>
              <a className="alink" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="alink" href="#">
                About
              </a>
            </li>
            <li>
              <a className="alink" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="alink" href="#">
                Contact
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideNav;
