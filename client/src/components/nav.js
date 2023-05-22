import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN } from '../utils/mutations';
import { ADD_USER } from '../utils/mutations';
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


  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <button className='login' onClick={() => Auth.logout()}>Logout</button>
      );
    } else {
      return (
<>
<button className='SignUp' onClick={openModal2}>Sign Up</button>
<Modal
          isOpen={modalIsOpen2}
          onAfterOpen={afterOpenModal2}
          onRequestClose={closeModal2}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className='login-modal'>
            <div className='modal-header'>
              <h2 ref={(_subtitle) => (subtitle2 = _subtitle)}>Sign Up</h2>
              <button onClick={closeModal2}>X</button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleFormSubmit2}>
                <label htmlFor="username"> User Name:</label>
                <input
                  placeholder="User Name"
                  name="username"
                  type="username"
                  id="username"
                  onChange={handleChange2} />

                <label htmlFor="email">Email: </label>
                <input
                  placeholder="email@test.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange2} />
                <label htmlFor="pwd">Password: </label>
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange2} />
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
                  onChange={handleChange} />
                <label htmlFor="pwd">Password: </label>
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange} />
                {error ? (
                  <div>
                    <p className="error-text">The provided credentials are incorrect</p>
                  </div>
                ) : null}
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </Modal></>
      );
    }
  }



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


  let subtitle2;
  const [modalIsOpen2, setIsOpen2] = React.useState(false);
 

  function openModal2() {
    setIsOpen2(true);
  }

  function afterOpenModal2() {
    // references are now sync'd and can be accessed.
    subtitle2.style.color = '#f00';
  }

  function closeModal2() {
    setIsOpen2(false);
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

  const [formState2, setFormState2] = useState({ email: '', password: '' });
   const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit2 = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState2.username,
        email: formState2.email,
        password: formState2.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setFormState2({
      ...formState2,
      [name]: value,
    });
  };

    return (
        <div className='nav'>

            <div className='side-bar'>
                <Link className='button' to='/'>
                    <span>HOME</span>
                </Link>
                <Link className='button' to='/profile'>
                    <span>PROFILE</span>
                </Link>
                <Link className='button' to='/create'>
                    <span>CREATE</span>
                </Link>
            </div>

            <header className='header'>
                <div className='header'>
                    <input className='search' placeholder='Find outfits...'></input>
                    <div> 
                    {showNavigation()}
      </div>
                </div>
            </header>
            
        </div>
    )
}

export default Sidebar;