function Services() {

  const services = [
    {
      icon: "💻",
      title: "Software Installation",
      description:
        "Windows installation, software setup, drivers installation, updates and system configuration."
    },

    {
      icon: "🔧",
      title: "Hardware Maintenance",
      description:
        "Computer repair, cleaning, RAM upgrades, storage replacement and hardware diagnostics."
    },

    {
      icon: "🛠️",
      title: "IT Support",
      description:
        "Technical support, troubleshooting, networking and computer maintenance solutions."
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

            <div className="service-icon">
              {service.icon}
            </div>


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
