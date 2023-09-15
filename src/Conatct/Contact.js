import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3010/contact', {
        name,
        email,
        phone,
        details,
      });

      if (response.status === 200) {
        setSubmitStatus('Message sent successfully!');
      } else {
        setSubmitStatus('Message failed to send.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('Message failed to send.');
    }
  };

  return (
    <>

    <div className='lll'>
      <div className="container">
        <h2 id="h2">CONTACT</h2>
      </div>
      <div className="container" id="contact">
        <div className="row">
          <div className="col-md-6 py-3 py-md-0">
            <h3>CONTACT</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorem sit excepturi, nemo reiciendis animi?</p>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input type="text" placeholder="Enter Details" value={details} onChange={(e) => setDetails(e.target.value)} />
              <button id="btnmessage" type="submit">Send</button>
            </form>
            {submitStatus && <p>{submitStatus}</p>}
          </div>
          <div className="col-md-6 py-3 py-md-0">
            <h3>INFO</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, odio assumenda nostrum commodi at corporis!</p>
            <i className="fas fa-phone"> <span>+000000000000000</span></i>
            <i className="fa-solid fa-envelope"> <span>example@gmail.com</span></i>
            <i className="fa-solid fa-location-dot"> <span>Madurai</span></i>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Contact;
