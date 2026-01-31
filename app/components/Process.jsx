export default function Process() {
  const steps = ["Ignition", "Orbit", "Velocity"];

  return (
    <section id="process" className="py-16 px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">Mission Trajectory</h2>
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-10">
        {steps.map((step, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl font-bold text-blue-600">{`0${i+1}`}</div>
            <h3 className="mt-2 text-xl font-semibold">{step}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
