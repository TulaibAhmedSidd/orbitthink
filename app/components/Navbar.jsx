export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-white shadow">
      <div className="text-xl font-bold">OrbitThink</div>
      <ul className="flex gap-6 text-gray-700">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
