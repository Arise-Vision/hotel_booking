"use client";

import { useState } from 'react';
import axios from 'axios';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send-email', { to: email, name });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className='container mx-auto px-4'>
      <form onSubmit={handleSubmit} className='bg-black/40 dark:bg-white/40 text-white px-4 rounded-xl md:rounded-[30px] flex flex-col justify-center items-center py-6 md:py-24'>
        <p className='md:font-semibold text-lg md:text-xl text-center mb-3'>
          Explore More About Our Hotel
        </p>
        <h6 className='md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center'>
          Sign Up for Our Newsletter
        </h6>

        <div className='flex-col justify-center w-full md:flex-row flex pt-12'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your email'
            className='bg-black/90 h-11 md:h-16 mb-2 md:mb-0 rounded-xl pl-6 md:mr-5 md:w-[452px] text-white placeholder:text-white focus:outline-none'
          />
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Your name'
            className='bg-black/90 h-11 md:h-16 mb-2 md:mb-0 rounded-xl pl-6 md:mr-5 md:w-[452px] text-white placeholder:text-white focus:outline-none'
          />
          <button type='submit' className='bg-black/20 border border-white py-2 px-4 rounded-lg'>
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;