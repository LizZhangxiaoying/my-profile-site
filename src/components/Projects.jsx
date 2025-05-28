export default function Projects() {
  const projects = [
    {
      title: "Research Paper Search Tool",
      image: "/images/search.jpg", // 请确保图片已放入 public/images 目录
      description:
        "Full-stack web app for searching over 200M scientific articles. Built with React.js and Express.js, and optimized data retrieval using Apache Spark on Databricks, improving query speed by 35%. Managed scalable infrastructure with MySQL, AWS RDS, and DataGrip. Skills: React.js, Express.js, MySQL, AWS, Spark.",
      links: [{ text: "GitHub", href: "https://github.com/CIS550-Group68/24Spring-CIS550-Group68-FinalProject" },
        { text: "YouTube", href: "https://www.youtube.com/watch?v=Wk09-cyMMnU" }]
    },
    {
      title: "TaskZen: Automated Task and Reminder App",
      image: "/images/task.png", // 同上
      description:
        "Full-stack productivity app for managing tasks with customizable reminders and recurring schedules. Built with React.js and Node.js, designed for a seamless user experience. Deployed on AWS with optimized performance for cloud scalability.",
      links: [
        { text: "GitHub", href: "https://github.com/LizZhangxiaoying/TaskZen" },
        { text: "YouTube", href: "https://www.youtube.com/watch?v=l6pC_KE-GKY" }
      ]
    }
  ];

  return (
<section id="projects" className="w-full py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
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
