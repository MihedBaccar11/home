import React, { useState } from 'react'
import "./style/navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import ModalLogin from './ModalLogin';


const Navbar = () => {
  const [show, setShow] = useState(false);


  return (
  
        <div className='navbar'>
        <div className='combo'>
        <div className='left'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/2560px-Etsy_logo.svg.png'/></div>
       
         
          <div className="searchP">
            <input
              type="text"
              placeholder="Vous cherchez quel projet..."
              className="search"
        
            />

            <i>
              <FontAwesomeIcon 
                icon={faSearch}
             
              />
            </i>
          </div>
          </div>
<div className='right'>
    <button onClick={()=>{setShow(!show)}}>Sign In</button>
    <div className='ima'><img src=" https://cdn-icons-png.flaticon.com/512/197/197560.png"/></div>
    
<div className='imb'>  < MdOutlineFavoriteBorder /></div> 
<div className='imc'>   <BsCart4/></div> 
    </div>
    <div className='nav-links'>
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</div>
{show && 
<ModalLogin  setShow={setShow} show={show}/>}
</div>


  )
}

export default Navbar