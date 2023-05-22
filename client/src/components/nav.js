import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
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

  Modal.setAppElement('#root');


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

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, loading }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    console.log(formState.password)
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      if (loading) {
        return (
          <p> Loading </p>)

      }
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
          <input className='search' placeholder='Find outfits...'></input>
          <button className='login' onClick={openModal}>Login</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='login-modal'>
              <div className='modal-header'>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Log in</h2>
                <button onClick={closeModal}>X</button>
              </div>
              <div className='modal-body'>
                <form onSubmit={handleFormSubmit}>
                  <label htmlFor="email">Email: </label>
                  <input
                    placeholder="email@test.com"
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                  />
                  <label htmlFor="pwd">Password: </label>
                  <input
                    placeholder="******"
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={handleChange}
                  />
                  {error ? (
                    <div>
                      <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                  ) : null}
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </Modal>
        </div>
      </header>

    </div>
  )
}

export default Sidebar;