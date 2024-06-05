'use client';

import React, { useState, useRef } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Your message has been sent!');
      formRef.current!.reset();
    } else {
      alert('There was an error sending your message.');
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form className="w-1/2" ref={formRef} onSubmit={handleSubmit}>
        <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-lg font-medium mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border border-gray-300 rounded-md py-2 px-3 w-full'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-lg font-medium mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-gray-300 rounded-md py-2 px-3 w-full'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block text-lg font-medium mb-2'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='border border-gray-300 rounded-md py-2 px-3 w-full'
            required
          ></textarea>
        </div>
        <button type='submit' className='dark:bg-white/40 bg-black/40 border border-white hover:bg-black/70 dark:text-white text-black py-2 px-4 rounded-md'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;