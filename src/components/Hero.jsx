function Hero() {

  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h1>
          Hi, I'm <span>Benedict E. Charles</span>
        </h1>


        <h2>
          IT Specialist | Web Developer
        </h2>


        <p>
          I provide reliable IT solutions including software installation,
          hardware maintenance, web development and technical support.
          I build modern digital solutions that help individuals and businesses.
        </p>


        <div className="hero-buttons">

          <a href="#contact" className="btn">
            Hire Me
          </a>


          <a href="#projects" className="btn secondary">
            View Projects
          </a>

        </div>


      </div>


      <div className="hero-image">

        <img 
          src="/profile.png" 
          alt="Benedict E. Charles"
        />

      </div>


    </section>
  );
}


export default Hero;
