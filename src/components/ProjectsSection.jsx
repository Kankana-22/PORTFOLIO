import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Student-Management-system",
    description: "Creating web application to manage student records. ",
    image: "/projects/student management system.png",
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/Kankana-22/Student-Management-system",
  },
  {
    id: 2,
    title: "Friend-s-Birthday-Project",
    description:
      "Creating web applications where the design is responsive, using button and hover effect.",
    image: "/projects/Friends birthday project.png",
    tags: ["HTML", "CSS"],
  
    githubUrl: "https://github.com/Kankana-22/Friend-s-Birthday-Project",
  },
  {
    id: 3,
    title: "Ultrasound Phantom",
    description:
      "Fabrication and ultrasound B-mode and Elastography imaging of tissue mimicking phantoms",
    image: "/projects/phantom_img_with_needle.png",
    tags: ["MATLAB", "Ultrasound Machine"],
  
    githubUrl: "https://github.com/Kankana-22/Ultrasound_phantom",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          <span className="text-primary">Featured Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully
          crafted with attention to detail and performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Kankana-22"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};