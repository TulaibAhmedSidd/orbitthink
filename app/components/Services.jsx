export default function Services() {
  const items = [
    "Generative AI",
    "Machine Learning",
    "Deep Learning",
  ];

  return (
    <section id="services" className="py-16 px-10 bg-white">
      <h2 className="text-3xl font-bold text-center">
        Intelligent Solutions
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((title) => (
          <div key={title} className="p-6 border rounded hover:shadow-lg">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-500">
              Description of {title} capabilities.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
