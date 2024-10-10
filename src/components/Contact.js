// Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // استدعاء EmailJS
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // إعداد EmailJS لإرسال الرسالة
    emailjs
      .send(
        'your_service_id', // ضع هنا Service ID
        'your_template_id', // ضع هنا Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'your_user_id' // ضع هنا User ID الخاص بك من EmailJS
      )
      .then(
        (result) => {
          console.log('Message Sent Successfully', result.text);
          alert('تم إرسال رسالتك بنجاح!');
        },
        (error) => {
          console.error('Error sending message', error.text);
          alert('حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.');
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>تواصل معنا</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">الاسم:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">البريد الإلكتروني:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">رسالتك:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">إرسال</button>
      </form>
    </div>
  );
};

export default Contact;
