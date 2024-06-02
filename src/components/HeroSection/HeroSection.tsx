import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex px-4 items-center gap-12 container mx-auto">
      <div className="py-10 h-full">
        <h1 className="font-heading mb-6">Explore Our Exquisite Hotel</h1>
        <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">
          Experience an Exquisite Hotel Immersed in Rich History and Timeless
          Elegance.
        </p>
        <button className="bg-black/50 shadow dark:shadow-white shadow-black border rounded-full p-3">
          Get Started
        </button>

        <div className="flex justify-between mt-12">
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Basic Room</p>
            <p className="font-medium text-lg xl:text-5xl md:font-bold">+ 20</p>
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Luxury Room</p>
            <p className="font-medium text-lg xl:text-5xl md:font-bold">+ 20</p>
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Suite</p>
            <p className="font-medium text-lg xl:text-5xl md:font-bold">+ 20</p>
          </div>
        </div>
      </div>
      <div className="md:grid hidden gap-8 grid-cols-1">
        <div className="rounded-2xl overflow-hidden h-48">
          <Image
            src={""}
            alt=""
            width={300}
            height={300}
            className="img scale-animation"
          />
        </div>
        <div className="rounded-2xl overflow-hidden h-48">
          <Image
            src={""}
            alt=""
            width={300}
            height={300}
            className="img scale-animation"
          />
        </div>
        <div className="rounded-2xl overflow-hidden h-48">
          <Image
            src={""}
            alt=""
            width={300}
            height={300}
            className="img scale-animation"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
