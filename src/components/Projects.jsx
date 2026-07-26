function Projects() {


  const projects = [

    {
      title: "Personal Portfolio Website",
      description:
        "A modern responsive portfolio website built to showcase my IT skills, services and professional profile.",
      tech:
        "React | CSS | Responsive Design"
    },


    {
      title: "Employee Attendance System",
      description:
        "A full-stack employee attendance and management system designed for web and future mobile application support.",
      tech:
        "React | Backend API | Database"
    },


    {
      title: "IT Support Solutions",
      description:
        "Technical solutions including system setup, troubleshooting, hardware maintenance and network support.",
      tech:
        "Hardware | Networking | IT Support"
    }

  ];



  return (

    <section className="projects" id="projects">


      <div className="section-title">

        <h2>
          Featured Projects
        </h2>

      </div>



      <div className="projects-container">


        {projects.map((project, index) => (


          <div className="project-card" key={index}>


            <h3>
              {project.title}
            </h3>


            <p>
              {project.description}
            </p>


            <span>
              {project.tech}
            </span>



            <button>
              View Project
            </button>


          </div>


        ))}


      </div>


    </section>

  );

}


export default Projects;
