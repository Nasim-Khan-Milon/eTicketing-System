const CTA: React.FC = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h3 className="text-3xl font-bold">
          Ready for Your Journey?
        </h3>

        <p className="mt-4">
          Book your bus ticket now and enjoy a comfortable trip.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium">
            Book Ticket
          </button>

          <button className="border border-white px-6 py-3 rounded-lg font-medium">
            View Schedule
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
