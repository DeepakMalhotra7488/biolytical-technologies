import {PageHero} from "../components/PageHero";

const services = [
  {
    title: "Turnkey Solutions for Defence R&D Facilities",
    description:
      "After-sales support, preventive maintenance and troubleshooting assistance."
  },
  {
    title: "Customize Software Development & Technical Consultancy",
    description:
      "Application-oriented guidance to help customers select and use instruments effectively."
  }
];

import {
  Wrench,
  CheckCircle2,
} from "lucide-react";

export const Services=(()=>{

  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Support beyond the sale."
        text="Practical support for installation, maintenance and day-to-day instrumentation requirements."
      />


      <section className="section">

        <div className="container service-grid">

          {services.map((service, index) => (

            <article
              className="service-card"
              key={service.title}
            >

              {/* <span className="service-no">
                0{index + 1}
              </span> */}

              <Wrench />

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </article>

          ))}

        </div>

      </section>


      <section className="split-section">

        <div className="container split reverse">

          <div className="split-copy">

            <span className="eyebrow">
              SERVICE APPROACH
            </span>

            <h2>
              From requirement to reliable operation.
            </h2>

            <p>
              Our service offering is designed to keep
              communication clear and help customers get
              practical value from their instruments.
            </p>

            <ul>

              <li>
                <CheckCircle2 />
                Requirement understanding
              </li>

              <li>
                <CheckCircle2 />
                Product/application guidance
              </li>

              <li>
                <CheckCircle2 />
                Installation support
              </li>

              <li>
                <CheckCircle2 />
                Maintenance and troubleshooting
              </li>

            </ul>

          </div>


          <div className="split-image">

            <img
              src="/images/service.svg"
              alt="Service"
            />

          </div>

        </div>

      </section>

    </>
  );
}) 