import React, { useRef, useState } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
//import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_API } from '../../../config.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Contact = () => {
  const [fullname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    toast.success('Thank you for Connecting with Aliu Adeyemi Adeniji!');

    //  form.current.reset(e);
    // e.target.reset();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_API
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h6>adenijialiuadeyemi@gmail.com</h6>
            <a
              href="mailto:adenijialiuadeyemi@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send a mail
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h6>+2348144959369</h6>
            <a
              href="https://api.whatsapp.com/send?phone=2348144959369&text=Hello%2C%20Aliu%20Adeyemi%20Adeniji!%2C%20I%20would%20like%20to%20get%20in%20touch."
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End Of Contact Option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            onChange={(event) => setName(event.target.value)}
            value={fullname}
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="user_email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            rows="7"
            placeholder="Leave a message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};
