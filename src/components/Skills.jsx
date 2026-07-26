function Skills() {


  const skills = [

    {
      title: "Windows & Operating Systems",
      description:
        "Installation, formatting, drivers setup, configuration and troubleshooting.",
      expertise: "90%",
      experience: "50+ Systems",
      level: "Advanced"
    },


    {
      title: "Hardware Maintenance",
      description:
        "Repair, cleaning, upgrades, replacement and hardware diagnostics.",
      expertise: "95%",
      experience: "40+ Repairs",
      level: "Advanced"
    },


    {
      title: "Networking",
      description:
        "LAN setup, WiFi configuration, connectivity solutions and troubleshooting.",
      expertise: "75%",
      experience: "20+ Setups",
      level: "Intermediate"
    },


    {
      title: "Web Development",
      description:
        "HTML, CSS, JavaScript, React and responsive website development.",
      expertise: "70%",
      experience: "5+ Projects",
      level: "Intermediate"
    },


    {
      title: "Database Management",
      description:
        "Database design basics, MySQL, queries and data management.",
      expertise: "60%",
      experience: "10+ Tasks",
      level: "Beginner"
    },


    {
      title: "IT Security Basics",
      description:
        "System protection, updates, security practices and safe computing.",
      expertise: "65%",
      experience: "15+ Tasks",
      level: "Intermediate"
    }

  ];



  return (

    <section className="skills" id="skills">


      <div className="section-title">

        <h2>
          My Skills
        </h2>

      </div>



      <div className="skills-container">


        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>


            <h3>
              {skill.title}
            </h3>


            <p>
              {skill.description}
            </p>



            <div className="skill-info">


              <span>
                Expertise
              </span>

              <strong>
                {skill.expertise}
              </strong>


            </div>



            <div className="skill-info">


              <span>
                Experience
              </span>

              <strong>
                {skill.experience}
              </strong>


            </div>



            <div className="level">

              {skill.level}

            </div>



          </div>

        ))}


      </div>


    </section>

  );


}


export default Skills;
