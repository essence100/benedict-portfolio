function Skills() {

  const skills = [
    {
      name: "HTML & CSS",
      level: "90%",
      description:
        "Building modern, responsive and attractive website interfaces."
    },

    {
      name: "JavaScript",
      level: "75%",
      description:
        "Creating interactive web features and dynamic user experiences."
    },

    {
      name: "React",
      level: "70%",
      description:
        "Developing modern component-based web applications."
    },

    {
      name: "Database Management",
      level: "60%",
      description:
        "Basic database design, queries and data management concepts."
    },

    {
      name: "Networking",
      level: "75%",
      description:
        "LAN setup, WiFi configuration and network troubleshooting."
    },

    {
      name: "IT Security Basics",
      level: "65%",
      description:
        "System protection, updates and safe computing practices."
    }
  ];


  return (
    <section className="skills" id="skills">

      <div className="section-title">
        <h2>My Skills</h2>
      </div>


      <div className="skills-container">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <h3>
              {skill.name}
            </h3>


            <span>
              {skill.level} Expertise
            </span>


            <p>
              {skill.description}
            </p>


          </div>

        ))}

      </div>


    </section>
  );
}


export default Skills;
