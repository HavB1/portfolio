export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate fullstack web developer with over 3 years of experience creating modern, responsive web
              applications. I love turning complex problems into simple, beautiful designs.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My expertise spans across frontend technologies like React and Next.js, combined with strong backend
              skills in PHP and PostgreSQL. I'm committed to writing clean, efficient code and staying up-to-date with
              the latest web development trends.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
