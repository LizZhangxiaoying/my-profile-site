const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Java", "Python", "TypeScript", "C", "C++", "LaTeX"]
  },
  {
    title: "Web Frontend",
    icon: "🌐",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Web Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Django", "REST API"]
  },
  {
    title: "Machine Learning",
    icon: "🧠",
    skills: ["Scikit-Learn", "PyTorch", "TensorFlow"]
  },
  {
    title: "Data Tools",
    icon: "📊",
    skills: ["SQL", "Apache Spark", "Pandas", "Excel"]
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    skills: ["Git", "bash", "Docker", "Unix/Linux"]
  },
  {
    title: "Data Engineering",
    icon: "🧱",
    skills: ["dbt", "Data Vault", "Snowflake"]
  },
  {
    title: "Databases",
    icon: "🗃️",
    skills: ["MySQL", "Postgres", "MongoDB", "Neo4j"]
  },
  {
    title: "Cloud & Infra",
    icon: "☁️",
    skills: ["AWS EC2", "S3", "RDS", "EMR"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map(({ title, icon, skills }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-2xl mb-2">{icon}</div>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
