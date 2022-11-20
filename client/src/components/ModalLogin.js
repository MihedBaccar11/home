import React from 'react'
import "./style/modal.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalLogin({show,setShow}) {
    const handleClose = () => setShow(false);
    

  return (
    <div className='modal-container'>

      <Modal closeButton className="modalx"show={show} onHide={handleClose}>
        <Modal.Header  style={{width:"100%"}}>
     
          <Modal.Title  className="header-modal">
          <h1>Sign In</h1>
          <button
            className="loginBtn"
        
          >
            Register
          </button>
          </Modal.Title>
       
        </Modal.Header>
        <Modal.Body>

        <div className="formInputs">
            <p>Email:</p>
            <input
              type="text"
              className="formTextItem"
              placeholder="email@exmaple.com"
             
            />
            <p>Mot de passe:</p>
            <input
              type="password"
              className="formTextItem"
              placeholder="**************"
           
            />
            <p>Mot de passe oublié ?</p>
          </div>
          <button
            className="loginBtnn"
        
          >
            Connecter
          </button>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  );
}

export default ModalLogin