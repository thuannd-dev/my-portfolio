type Project = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  year: string;
  type: string;
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Project Image */}
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden select-none">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        {/* Project Type and Year Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 dark:bg-gray-800/95 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
            {project.type} • {project.year}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 text-center text-sm"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 py-2 px-4 rounded-lg transition-colors duration-300 text-center text-sm"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "Study-Hub Learning Management & Task System",
      description:
        "A comprehensive web application featuring task management functionality integrated with a learning management system. Includes user authentication via Google OAuth, course and exam management, student grading system, file handling capabilities, and background job processing. Built with clean architecture approach using separate layers for data access, business logic, and presentation.",
      technologies: [
        ".NET 8.0",
        "Entity Framework Core",
        "SQL Server",
        "AutoMapper",
        "FluentValidation",
        "JWT Bearer",
        "OAuth 2.0",
        "Hangfire",
        "Serilog",
      ],
      imageUrl: "/my-portfolio/Hello.jpg",
      githubUrl: "https://github.com/thuannd-dev/study-hub",
      liveUrl: "https://github.com/thuannd-dev/study-hub",
      year: "2025",
      type: "Personal Project",
    },
    {
      title: "Shopping Cart Application",
      description:
        "Designed and implemented the backend infrastructure for a comprehensive shopping cart application. The project includes a secure and efficient API system that handles user authentication, file uploads, and database management. Built with scalability in mind, it leverages modern tools and frameworks to ensure optimal performance and maintainability.",
      technologies: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Sharp",
        "Formidable",
      ],
      imageUrl: "/my-portfolio/Hello.jpg",
      githubUrl: "https://github.com/thuannd-dev/Shopping-Card",
      liveUrl: "https://github.com/thuannd-dev/Shopping-Card",
      year: "2024",
      type: "Personal Project",
    },
    {
      title: "CodeSignal Solutions Repository",
      description:
        "Compiled a collection of solutions for various coding challenges from the CodeSignal platform. Each solution is crafted to demonstrate problem-solving skills and proficiency in programming concepts, serving as a resource for learning and reference.",
      technologies: [
        "C#",
        "JavaScript",
        "Algorithms",
        "Data Structures",
        "Code Optimization",
      ],
      imageUrl: "/my-portfolio/Hello.jpg",
      githubUrl: "https://github.com/thuand-dev/codesignal-solutions",
      liveUrl: "https://your-codesignal-solutions.com",
      year: "2024",
      type: "Personal Project",
    },
    {
      title: "Shopi-Pied Product Management Web Application",
      description:
        "Developed a web application that enables users to add, view, and manage products, including details such as name, price, quantity, and image. Implemented basic CRUD operations (Create, Read, Update, Delete) to facilitate efficient product management.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "DOM Manipulation",
        "Responsive Design",
      ],
      imageUrl: "/my-portfolio/Hello.jpg",
      githubUrl: "https://github.com/thuand-dev/shopi-pied",
      liveUrl: "https://your-shopi-pied.com",
      year: "2024",
      type: "Personal Project",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
