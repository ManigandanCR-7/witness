function ProjectCard({ project, delay = 0 }) {
  return (
    <div
      className="blog-card bg-white fade-in"
      style={{ animationDelay: `${delay}s` }} data-id="ao84vomra" data-path="js/components/ProjectCard.js">

      <div className="blog-card-image" data-id="jey3vmen9" data-path="js/components/ProjectCard.js">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover" data-id="h749bv0ke" data-path="js/components/ProjectCard.js" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" data-id="z0oz769kc" data-path="js/components/ProjectCard.js">
          <a href={project.link} className="px-4 py-2 bg-serene-500 text-white rounded-lg hover:bg-serene-600 transition-all m-2" data-id="cz24hk1vx" data-path="js/components/ProjectCard.js">
            View Project
          </a>
          <a href={project.github} className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all m-2" data-id="1m5kcbn4u" data-path="js/components/ProjectCard.js">
            <i className="fab fa-github mr-2" data-id="itikibj38" data-path="js/components/ProjectCard.js"></i>GitHub
          </a>
        </div>
      </div>
      
      <div className="blog-card-content" data-id="a38qbhrw2" data-path="js/components/ProjectCard.js">
        <div className="flex flex-wrap mb-3" data-id="847kq8odk" data-path="js/components/ProjectCard.js">
          {project.technologies.map((tech, index) =>
          <span
            key={index}
            className="blog-tag bg-serene-50 text-serene-700" data-id="7q5d8gp7j" data-path="js/components/ProjectCard.js">
              {tech}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2 hover:text-serene-600 transition-all" data-id="mitw5fesj" data-path="js/components/ProjectCard.js">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4" data-id="cw3i57m2z" data-path="js/components/ProjectCard.js">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between" data-id="xb9zmwk8i" data-path="js/components/ProjectCard.js">
          <div className="flex items-center" data-id="z4hx0hkli" data-path="js/components/ProjectCard.js">
            <span className="text-sm text-gray-500" data-id="mzjt72b8q" data-path="js/components/ProjectCard.js">{project.date}</span>
          </div>
          
          <button className="flex items-center text-serene-600 hover:text-serene-700 transition-all" data-id="gxsbdau0i" data-path="js/components/ProjectCard.js">
            <span className="mr-1 text-sm font-medium custom-underline" data-id="y5ifufxn1" data-path="js/components/ProjectCard.js">Details</span>
            <i className="fas fa-arrow-right text-xs" data-id="7atox8ghb" data-path="js/components/ProjectCard.js"></i>
          </button>
        </div>
      </div>
    </div>);
}

function Projects() {
  const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce platform with cart, checkout, and payment integration.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB"],
    date: "March 2023",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Portfolio Management App",
    description: "Application for managing investment portfolios with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["Angular", "TypeScript", "Firebase"],
    date: "January 2023",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "Interactive weather application with 7-day forecasts and location-based services.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "APIs", "CSS3"],
    date: "November 2022",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates and team integration.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    date: "August 2022",
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Health & Fitness Tracker",
    description: "Mobile application for tracking fitness goals, nutrition, and health metrics.",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "GraphQL", "AWS"],
    date: "May 2022",
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for monitoring social media performance across platforms.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    technologies: ["NextJS", "TailwindCSS", "D3.js"],
    date: "February 2022",
    link: "#",
    github: "#"
  }];

  return (
    <section id="projects" className="py-16 bg-serene-50/50" data-id="d6772nnxi" data-path="js/components/ProjectCard.js">
      <div className="blog-container" data-id="npt1zmc63" data-path="js/components/ProjectCard.js">
        <div className="text-center mb-12" data-id="ebep3lkle" data-path="js/components/ProjectCard.js">
          <span className="inline-block px-4 py-1 rounded-full bg-serene-100 text-serene-700 font-medium text-sm mb-4" data-id="ugvy62gui" data-path="js/components/ProjectCard.js">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="ye2j6hpyk" data-path="js/components/ProjectCard.js">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-id="wika7d0hh" data-path="js/components/ProjectCard.js">
            A selection of my recent work showcasing my skills in web development,
            design, and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="gfge0zxsp" data-path="js/components/ProjectCard.js">
          {projects.map((project, index) =>
          <ProjectCard key={project.id} project={project} delay={0.1 * index} />
          )}
        </div>
      </div>
    </section>);
}