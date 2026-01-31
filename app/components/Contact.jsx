export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-10 bg-gray-100 text-center"
    >
      <h2 className="text-2xl font-bold">Start Your Mission</h2>
      <form className="mt-6 max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 border rounded" />
        <input type="email" placeholder="Email" className="p-3 border rounded" />
        <textarea placeholder="Message" className="p-3 border rounded"></textarea>
        <button className="px-6 py-3 bg-blue-600 text-white rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
    