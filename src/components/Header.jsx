export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Liz Zhang</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#volunteering" className="hover:text-blue-600">Volunteering</a>
        </div>
      </nav>
    </header>
  )
}
