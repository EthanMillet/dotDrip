import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const Sidebar = () => {

    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

    return (
        <div className='nav'>

            <div className='side-bar'>
                <Link className='button' to='/'>
                    <span>HOME</span>
                </Link>
                <Link className='button' to='/'>
                    <span>WARDROBE</span>
                </Link>
                <Link className='button' to='/'>
                    <span>CREATE</span>
                </Link>
                <Link className='button' to='/'>
                    <span>PROFILE</span>
                </Link>
                <Link className='button' to='/'>
                    <span>CONTACT</span>
                </Link>
            </div>

            <header className='header'>
                <div className='header'>
                    <input className='search' default='SEARCH...'></input>
                    <button className='login' onClick={openModal}>Login</button>
                    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
                </div>
            </header>
            
        </div>
    )
}

export default Sidebar;