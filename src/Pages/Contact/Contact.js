import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('test_serviceid11', 'template_k4g0zph', form.current, 'user_otPikrA9IVgTAaIXGEDNM')
            .then((result) => {
                alert('Message Send Successfully');
            }, (error) => {
                alert(error.message);
            });
        e.target.reset();
    };
    return (
        <>
            <section id='contact' className="contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className='contact-header'>Get In Touch</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className='contacts-list'>
                                <dl className='contactList'>
                                    <dt>Phone:</dt>
                                    <dd>01778272844</dd>
                                    <dt>Skype:</dt>
                                    <dd>iamsufian</dd>
                                    <dt>Email:</dt>
                                    <dd>sufianfuad2611@gmail.com</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-5">
                            <div className="contacts-form">
                                <h4 className='contacts-form-title'>Or just write me a letter here</h4>
                                <form className='js-form' ref={form} onSubmit={sendEmail}>
                                    <div className='form-group'>
                                        <input className='form-field js-field-name'
                                            type="text"
                                            name='client-name'
                                            required
                                            placeholder='Your Name'
                                            id='validationCustom01' />
                                    </div>
                                    <div className='form-group'>
                                        <input className='form-field js-field-name'
                                            type="text"
                                            name='email'
                                            required
                                            placeholder='Your Email' />
                                    </div>
                                    <div className='form-group'>
                                        <textarea className='form-field js-field-name'
                                            type="text"
                                            name='message'
                                            required
                                            placeholder='Type your message here' />
                                    </div>
                                    <div className=''>
                                        <button className='send-btn send-btn--form' type="submit" value='Send'>
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr className='text-white' />
                    <Footer></Footer>
                </div>
            </section>

        </>
    );
};

export default Contact;