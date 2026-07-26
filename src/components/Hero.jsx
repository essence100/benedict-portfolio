function Hero() {

  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h1>
          Hi, I'm <span>Benedict E. Charles</span>
        </h1>


        <h2>
          IT Specialist
        </h2>


        <p>
          Software Installation | Hardware Maintenance | IT Support
        </p>


        <p className="hero-description">
          I provide reliable IT solutions including computer maintenance,
          system setup, troubleshooting, web development and technical support.
        </p>


        <a href="#contact" className="btn">
          Hire Me
        </a>

      </div>



      <div className="hero-image">

        <img 
          src="/profile.png" 
          alt="Benedict Profile"
        />

      </div>


    </section>
  );

}


export default Hero;
