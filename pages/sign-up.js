import Head from 'next/head'
import styles from '../styles/Join.module.css'
import Navbar from '../components/navbar'
import { Modal } from '../components/modal'
import React, { useState } from 'react'

const SignUp = () => {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const [details, setDetails] = useState([])
  const [modal, setModal] = useState({
    shown: false,
    modalText: '',
    textColor: '',
  })

  const showModal = (modalText, textColor) => {
    setModal({ shown: true, modalText: modalText, textColor: textColor })
    setTimeout(() => {
      setModal({ shown: false, modalText: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    e.preventDefault()
    const [name, value] = [e.target.name, e.target.value]
    const newItem = {
      ...person,
      [name]: value,
    }
    setPerson(newItem)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ((person.firstName, person.lastName, person.email)) {
      const contactDetails = { ...person, id: new Date().getTime().toString() }
      setDetails([...details, contactDetails])
      showModal(
        `Thank you ${contactDetails.firstName} for signing up!`,
        '#00005f'
      )
      setPerson({ firstName: '', lastName: '', email: '' })
    } else {
      showModal('Please fill in all the fields', 'red')
    }
  }

  return (
    <>
      <Head>
        <title>Gamerland</title>
        <meta name='description' content='Gamerland- A website for gamers' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formContainer}>
            <h1>Get in Touch</h1>
            {modal.shown && (
              <Modal modalText={modal.modalText} textColor={modal.textColor} />
            )}
            <div className={styles.formControl}>
              <label htmlFor='firstName'>First Name : </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={person.firstName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor='lastName'>Last Name : </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={person.lastName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor='email'>Email Address : </label>
              <input
                type='text'
                id='email'
                name='email'
                value={person.email}
                onChange={handleChange}
              />
            </div>
            <button type='submit' className={styles.formBtn}>
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export default SignUp
