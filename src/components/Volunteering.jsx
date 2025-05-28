export default function Projects() {
  const projects = [
    {
      title: "Engineering Summer Academy at Penn (ESAP)",
      image: "/images/esap.png", // 请确保图片已放入 public/images 目录
      description:
        "Taught 50+ high school students core programming concepts in Java and Python through lectures and project-based learning, with a focus on object-oriented programming, data structures, and Python libraries like pandas, NumPy, and matplotlib. Also supported those students as a residential advisor, planning events and fostering a safe, inclusive learning environment.",
      link: {
        text: "Learn More",
        href: "https://esap.seas.upenn.edu/about/"
      }
    },
    {
      title: "Church Network Service",
      image: "/images/serve.jpg", // 同上
      description:
        "Volunteered regularly with a local church network, helping organize events, welcome new members, and lead small group discussions. Through this role, I developed strong interpersonal skills, learned to serve with empathy, and contributed to building a caring and connected community.",
      link:  {
        text: "Learn More",
        href: "https://www.storycollegechurch.org/"
      }
    }
  ];

  return (
<section id="volunteering" className="w-full py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Volunteering & Community</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
          )}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            {project.link && (
              <a
                href={project.link.href}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.link.text}
              </a>
            )}
            {project.links &&
              project.links.map((link, idx) => (
                <div key={idx}>
                  <a
                    href={link.href}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
