function Projects() {

  const projects = [
    {
      title: "Business Website",
      description:
        "A modern responsive website designed to help businesses build an online presence.",
      tech:
        "HTML | CSS | JavaScript"
    },


    {
      title: "WhatsApp Order System",
      description:
        "A simple ordering system where customers submit orders directly through WhatsApp.",
      tech:
        "HTML | CSS | JavaScript"
    },


    {
      title: "Employee Attendance System",
      description:
        "A future full-stack employee management and attendance solution.",
      tech:
        "React | Node.js"
    }
  ];


  return (
    <section className="projects" id="projects">


      <div className="section-title">
        <h2>My Projects</h2>
      </div>



      <div className="project-container">


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


          </div>

        ))}


      </div>


    </section>
  );
}


export default Projects;
