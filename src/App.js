import { React, useState } from "react";
import './App.css';
import User from "./app/user/User";

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseButton from 'react-bootstrap/CloseButton';

import { FiSearch } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";

function App() {
  const [inputText, setInputText] = useState("");
  const [show, setShow] = useState(false);
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div>
      <Navbar bg="dark">
        <a className="ms-2" href="#!" onClick={handleShow}>
          <BiMenuAltLeft className="fs-2 text-white" />
        </a>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Body>
          <Row className="mb-3">
            <Col xs={4} ><a href="#!" onClick={handleClose}><IoIosArrowBack className="fs-5 text-black" /></a></Col>
            <Col xs={4} className="text-center fw-bold"><h5>Members</h5></Col>
            <Col xs={4} className="text-end"><Button variant="outline-secondary" className="px-1 py-0" style={{ borderRadius: "3px", fontSize: "11px" }}>+ Add Members</Button></Col>
          </Row>
          <InputGroup className="mb-3" size="lg">
            <InputGroup.Text id="searchUser" className="border-0 bg-grey rounded-start ps-3 py-2"><FiSearch className="fs-2 text-muted" /></InputGroup.Text>
            <Form.Control className='bg-grey border-0 searchInput ms-0'
              placeholder="Search"
              aria-label="Search"
              onChange={inputHandler}
            />
          </InputGroup>
          <User input={inputText} />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default App;
