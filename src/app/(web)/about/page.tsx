const AboutPage = () => {
  return (
    <div>
      <section className="container mx-auto px-4 flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 overflow-hidden">
          <img
            src="/images/hero-1.jpeg"
            alt="Power King Hotel"
            className="w-full h-full object-cover rounded-md scale-animation"
          />
        </div>
        <div className="w-full md:w-1/2 pl-4 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">About Power King Hotel</h1>
          <p className="text-lg mb-6">
            Welcome to Power King Hotel, where luxury meets comfort. Our hotel is
            located in the heart of the city, offering stunning views of the
            surrounding landscape.
          </p>
          <p className="text-lg mb-6">
            Our hotel features 100 luxurious rooms, each equipped with modern
            amenities and comfortable furnishings. Our friendly staff is dedicated
            to providing exceptional service to ensure a memorable stay.
          </p>
          <p className="text-lg mb-6">
            Whether you're traveling for business or leisure, Power King Hotel is
            the perfect destination for you. We offer a range of amenities,
            including a fitness center, restaurant, and bar.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;