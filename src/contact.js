import Footer from './footer.js'
import { useState } from 'react'
import './contact.css'

function Contact() {
    return (
        <>
            <main className='contactMain'>
                <div className='main-container'>
                    <Header />
                    <Form />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

function Header() {
    return (
        <div className='contact-header'>
            <h2>Contact Me</h2>
            <p>
                Hi there, contact me to ask me
                about anything you have in mind.
            </p>
        </div>
    )
}

function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [check, setCheck] = useState(false)
    const [senders, setSenders] = useState([])
    function handleForm(e) {
        e.preventDefault()
        if (
            firstName &&
            lastName &&
            email &&
            message &&
            check
        ) {
            const sender = {
                id: new Date()
                    .getTime()
                    .toString()
                    .slice(0, 4),
                lastName,
                firstName,
                email,
                message,
            }
            console.log(check)
            setSenders((people) => {
                return [...people, sender]
            })
            setFirstName('')
            setEmail('')
            setCheck(check)
            setLastName('')
            setMessage('')
        } else {
            console.log('empty values')
        }
    }

    return (
        <div>
            <form
                className='form'
                onSubmit={handleForm}
            >
                <div className='fullName'>
                    <div className='form-control firstName'>
                        <label htmlFor='first_name'>
                            First Name
                        </label>
                        <input
                            id='first_name'
                            value={firstName}
                            type='text'
                            name='first_name'
                            placeholder='Enter your first name'
                            onChange={(e) =>
                                setFirstName(
                                    e.target.value
                                )
                            }
                        />
                    </div>
                    <div className='form-control lastName'>
                        <label htmlFor='last_name'>
                            Last Name
                        </label>
                        <input
                            id='last_name'
                            name='last_name'
                            value={lastName}
                            type='text'
                            placeholder='Enter your last name'
                            onChange={(e) =>
                                setLastName(
                                    e.target.value
                                )
                            }
                        />
                    </div>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>
                        Email
                    </label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        id='email'
                        placeholder='youremail@email.com'
                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
                        }
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='message'>
                        Message
                    </label>

                    <textarea
                        name='message'
                        id='message'
                        cols='30'
                        rows='10'
                        onChange={(e) =>
                            setMessage(
                                e.target.value
                            )
                        }
                    ></textarea>
                </div>
                <div className='form-control check'>
                    <input
                        type='checkbox'
                        name='confirm'
                        id='confirm'
                        onChange={() =>
                            setCheck(!check)
                        }
                    />
                    <label htmlFor=''>
                        You agree to providing
                        your data to (name) who
                        may contact you.
                    </label>
                </div>
                <button
                    className='submit-btn'
                    id='btn__submi'
                >
                    send message
                </button>
            </form>
            {senders.map((sender) => {
                const { id, firstName } = sender
                return (
                    <div
                        className='success message'
                        key={id}
                    >
                        <p>Contact id: {id}</p>
                        <p>
                            Thanks for contacting
                            us, {firstName}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Contact
