const Hero: React.FC = () => {
  return (
    <section className=" py-20 bg-[url('/background.jpg')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-wide text-gray-100">
          Bus Transportation
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Book Bus Tickets Online with Ease
        </h2>

        <p className="mt-4 text-white max-w-2xl mx-auto">
          A secure, fast, and reliable bus ticket booking system for your journey.
        </p>

        <button className="mt-8 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
