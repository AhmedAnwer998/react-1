import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button, Offcanvas, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./SecondNav.css";

function SecondNav() {
  const [show, setShow] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null); // State to track selected element

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to handle the selection of an element
  const handleSelect = (variant) => {
    setSelectedElement(variant); // Update the selected element
  };

  return (
    <Container>
      {/* Side Navigation Menu (hidden on large screens) */}
      <Button className="sidenav" variant="" onClick={handleShow}>
        <div className="menu-icon hamburger">
          <div className="line first-line"></div>
          <div className="line second-line"></div>
        </div>
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body">
          <div className="side-nav-links">
            {["Home", "Shop", "Pages", "Blog"].map((variant) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-liss-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
                className={`sidenav-dropdown ${
                  selectedElement === variant ? "selected" : ""
                }`} // Add selected class conditionally
                onClick={() => handleSelect(variant)} // Capture the clicked element
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
            ))}

            {/* Simple button for "Contact" without dropdown */}
            <button
              className={`contact-btn ${
                selectedElement === "Contact" ? "selected" : ""
              }`} // Add selected class conditionally
              onClick={() => handleSelect("Contact")} // Handle selection of Contact button
            >
              Contact
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Regular Dropdown Menu (hidden on small screens) */}
      <div className="second-nav">
        {["Home", "Shop", "Pages", "Blog"].map((variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-liss-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
            className={`regular-dropdown ${
              selectedElement === variant ? "selected" : ""
            }`} // Add selected class conditionally
            onClick={() => handleSelect(variant)} // Capture the clicked element
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        ))}

        {/* Simple button for "Contact" without dropdown */}
        <button
          className={`contact-btn ${
            selectedElement === "Contact" ? "selected" : ""
          }`} // Add selected class conditionally
          onClick={() => handleSelect("Contact")} // Handle selection of Contact button
        >
          Contact
        </button>
      </div>
    </Container>
  );
}

export default SecondNav;
