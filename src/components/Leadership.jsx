export default function Leadership() {
  const roles = [
    {
      logo: "/images/peets.png",
      title: "Data Engineer Intern",
      subtitle: "Peet's Coffee",
      description:
        "Built and optimized real-time data pipelines with dbt, Python, and SQL, improving runtime by 30% and enabling hourly data sync. Implemented data quality checks and wrote documentation to support team knowledge sharing."
    },
    {
      logo: "/images/penn.png",
      title: "Teaching Assistant",
      subtitle: "CIT 5910, University of Pennsylvania",
      description:
        "Taught Java and Python to 100+ students, emphasizing OOP, data structures, and libraries like pandas and NumPy. Provided hands-on debugging support for 200+ projects, improving student success and code quality."
    },
    {
      logo: "/images/skyit-logo.png", // Ensure this image exists in your /public/images folder
      title: "Software Engineer Intern",
      subtitle: "SkyIT Services | Remote",
      description:
        "Built and optimized full-stack SaaS features using React, TypeScript, Node.js, and PostgreSQL. Improved API performance, streamlined CI/CD with GitHub Actions, and integrated AWS S3 for efficient file storage."
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-2"
            >
              {role.emoji ? (
                <div className="text-3xl">{role.emoji}</div>
              ) : (
                <img
                  src={role.logo}
                  alt={role.title}
                  className="w-36 h-36 rounded-xl object-contain mb-2"
                />
              )}
              <h3 className="text-lg font-semibold">{role.title}</h3>
              <h4 className="text-gray-500 font-medium">{role.subtitle}</h4>
              <p className="text-gray-700 mt-2">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
