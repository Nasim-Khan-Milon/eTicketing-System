interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Choose Schedule",
    description:
      "View available bus schedules and select your preferred departure time.",
  },
  {
    title: "Select Destination",
    description:
      "Choose your destination city from multiple routes across Indonesia.",
  },
  {
    title: "Fast Booking",
    description:
      "Simple and quick booking process with instant confirmation.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-900">
          Easy Ticket Booking
        </h3>

        <p className="mt-4 text-gray-600">
          Enjoy a variety of conveniences when booking bus tickets.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h4>
              <p className="mt-3 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
