export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center gap-8 py-24">
 <img
  src="/src/assets/avatar.jpg"
  alt="avatar"
  className="w-48 h-auto rounded-2xl shadow-lg"
/>
      <div>
        <h2 className="text-3xl font-semibold mb-2">Hi, I'm Liz 👋</h2>
        <p className="text-gray-600">
        Hi! I’m a graduate student in Computer and Information Technology at Penn, passionate about building things that are both smart and useful. Before diving into tech, I worked in education and have served as a teaching assistant for multiple programming courses—I love explaining complex ideas clearly, working with students, and creating space for learning. From full-stack web apps to real-time data pipelines, I’ve enjoyed working across the stack with tools like React, Node.js, SQL, and AWS. I love turning complex problems into elegant code—and learning something new along the way.
        </p>
        <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all"
>
  <svg className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
  Download Resume
</a>
      </div>
    </section>
  )
}
