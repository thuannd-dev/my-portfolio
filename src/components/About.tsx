const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know me better and learn about my journey as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center">
              <svg
                className="w-32 h-32 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I am a second-year Software Engineering student at FPT
                University with a deep passion for exploring and applying
                cutting-edge technologies to real-world projects.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                My expertise spans across modern technologies including .NET,
                React, Node.js, TypeScript, and cloud platforms. I'm constantly
                learning and staying up-to-date with the latest industry trends
                and best practices.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    1+
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Years Experience
                  </p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                    20+
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Frontend
              </h4>
              <div className="space-y-3">
                {[
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Next.js",
                  "Vue.js",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Backend
              </h4>
              <div className="space-y-3">
                {[".NET", "Node.js", "Express", "MongoDB", "PostgreSQL"].map(
                  (skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tools & Others
              </h4>
              <div className="space-y-3">
                {["Git", "Docker", "AWS", "Figma", "Kubernetes"].map(
                  (skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
