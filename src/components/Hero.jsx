export default function Hero() {
    return (
      <section className="text-center py-32 bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600">Liz Zhang</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Software Engineer & Educator | Designing thoughtful tech, led by empathy and impact
        </p>
  
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <a
            href="https://www.linkedin.com/in/liz-zhang-upenn/"
            target="_blank"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.1h.1c.5-1 1.8-2.1 3.6-2.1 3.9 0 4.6 2.5 4.6 5.8V24h-4v-8.4c0-2-.1-4.6-2.8-4.6s-3.2 2.2-3.2 4.4V24h-4V8z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:zbzxy@upenn.edu"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M22,6L12,13 2,6" />
            </svg>
            Email
          </a>
        </div>
  
        <a
          href="#about"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Learn More
        </a>
      </section>
    );
  }
  