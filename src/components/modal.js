import React, { useState } from 'react';
import Modal from 'react-modal';
import { Redirect } from 'react-router-dom';

import Login from '../components/login';
import Apply from '../components/apply';

Modal.setAppElement('#root');

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

const buttonStyles = {
    background: "dodgerblue", 
    color: "white", 
    fontSize: "18px", 
    fontWeight: "600", 
    paddingLeft: "30px", 
    paddingTop: "10px", 
    paddingRight: "30px", 
    paddingBottom: "10px" ,
    borderRadius: "40px" 
}

const CustomModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const token = localStorage.getItem('token')

    return (
        <div>
            <button onClick={openModal} style={buttonStyles}>APPLY HERE</button>
            {token ? 
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='apply for job modal'
                >
                    <button onClick={closeModal}>close</button>
                    <Apply closeModal={closeModal} />
                </Modal> 
                : 
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='apply for job modal'
                >
                    <button onClick={closeModal}>close</button>
                    <div>Login modal</div>
                    <Login closeModal={closeModal}/>
                </Modal> 
            }
        </div>
    )
}

export default CustomModal;