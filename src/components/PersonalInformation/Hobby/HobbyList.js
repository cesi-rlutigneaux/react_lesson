import { hobbyList } from "../../../datas/HobbyList";

import "../../../styles/PersonalInformation/Hobby/HobbyList.css";

import React, { useState, useEffect, useContext } from "react";
import Hobby from "./Hobby";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { Context } from "../../Context";

function HobbyList() {
  const [show, setShow] = useState(false);
  const [list, setList] = useState(hobbyList);
  const [count, setCount] = useState(0);
  const [hobbyName, setHobbyName] = useState("");
  const [hobbyImg, setHobbyImg] = useState("");

  const [context] = useContext(Context);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  function handleChangeHobbyName(event) {
    setHobbyName(event.target.value);
  }

  function handleChangeHobbyImg(event) {
    setHobbyImg(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name: hobbyName, img: hobbyImg });
    setList(newList);
  }

  const counter = () => {
    document.title = `You clicked ${count} times`;
  };

  const countIncrement = (x) => {
    setCount(count + x);
  };

  useEffect(() => {
    counter();
  }, []);

  useEffect(() => {
    countIncrement(10);
    counter();
  }, [list]);

  return (
    <>
      <h4>Loisirs</h4>
      <div className="container">
        {list.map((hobby, index) => (
          <Hobby key={index} hobby={hobby} />
        ))}
      </div>
      <br></br>
      <Button variant="outline-dark" onClick={handleShow}>
        Ajouter un Loisir
      </Button>
      <br></br>
      <div>
        <p>You clicked {context} times</p>
        <ContainerButtons />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un loisir</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <label>Nom du loisir</label>
            </Col>
            <Col>
              <input
                type="text"
                value={hobbyName}
                onChange={handleChangeHobbyName}
              />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <label>Image du loisir</label>
            </Col>
            <Col>
              <input
                type="url"
                value={hobbyImg}
                onChange={handleChangeHobbyImg}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ContainerButtons() {
  return (
    <>
      <h1>ContainerButtons</h1>
      <ButtonList />
    </>
  );
}

function ButtonList() {
  return (
    <>
      <h2>ButtonList</h2>
      <AddButton />
    </>
  );
}

function AddButton() {
  const [context, setContext] = useContext(Context);
  return (
    <>
      <h3>AddButton {context}</h3>
      <Button variant="outline-dark" onClick={() => setContext(context + 1)}>
        Click me and see the magic...
      </Button>
    </>
  );
}

export default HobbyList;
