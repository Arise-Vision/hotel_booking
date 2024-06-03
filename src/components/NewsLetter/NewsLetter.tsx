const NewsLetter = () => {
  return (
    <section className='bg-black/10 dark:bg-white/10 rounded container mx-auto px-4'>
      <form className='dark:text-white text-black px-4 rounded-xl md:rounded-[30px] flex flex-col justify-center items-center py-6 md:py-24'>
        <p className='md:font-semibold text-lg md:text-xl text-center mb-3'>
          Explore More About Our Hotel
        </p>
        <h6 className='md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center'>
          Sign Up for Our Newsletter
        </h6>

        <div className='flex-col justify-center w-full md:flex-row flex pt-12'>
          <input
            type='email'
            placeholder='Your email'
            className='bg-black/10 dark:bg-white/10 h-11 md:h-16 mb-2 md:mb-0 rounded-xl pl-6 md:mr-5 md:w-[452px] dark:text-white dark:placeholder:text-white text-black placeholder:text-black focus:outline-none'
          />
          <button type='button' className='dark:bg-white dark:text-black bg-black text-white py-2 px-3 rounded text-2xl font-bold'>
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;