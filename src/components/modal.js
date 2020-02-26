import React, { useState } from 'react';
import Modal from 'react-modal';

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
      transform: 'translate(-50%, -50%)',
      width: '50%',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)'
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

const CustomModal = ({ match }) => {
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
            <button className='px-4 py-2 bg-blue-400 text-lg text-white rounded-lg' onClick={openModal}>APPLY HERE</button>
            {token ? 
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='apply for job modal'
                >
                    <div className='flex justify-end'>
                        <button className='font-bold bg-gray-200 px-4 py-2 rounded-lg' onClick={closeModal}>X</button>
                    </div>
                    <Apply closeModal={closeModal} match={match} />
                </Modal> 
                : 
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='apply for job modal'
                >
                    <div className='flex justify-end mb-4'>
                        <button className='font-bold bg-gray-200 px-4 py-2 rounded-lg' onClick={closeModal}>X</button>
                    </div>
                    <h3 className='text-xl'>You have to be logged in to apply to jobs</h3>
                    <Login closeModal={closeModal}/>
                </Modal> 
            }
        </div>
    )
}

export default CustomModal;