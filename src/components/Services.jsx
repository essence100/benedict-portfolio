function Services() {

  const services = [
    {
      title: "Software Installation",
      description:
        "Windows installation, software setup, drivers installation, updates and system configuration."
    },

    {
      title: "Hardware Maintenance",
      description:
        "Computer repair, cleaning, upgrades, replacement and hardware diagnostics."
    },

    {
      title: "IT Support",
      description:
        "Technical support, troubleshooting, networking and computer maintenance solutions."
    },

    {
      title: "Web Development",
      description:
        "Responsive websites and modern web solutions using current technologies."
    }
  ];


  return (
    <section className="services" id="services">

      <div className="section-title">
        <h2>My Services</h2>
      </div>


      <div className="service-container">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <h3>
              {service.title}
            </h3>


            <p>
              {service.description}
            </p>

          </div>

        ))}

      </div>


    </section>
  );
}


export default Services;
