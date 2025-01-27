import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Buy Now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buy your fisrt ROG</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Make sure you are ready for awesomeness.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger">
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
