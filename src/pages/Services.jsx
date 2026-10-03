
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";

import {
  Wrench,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    title: "Turnkey Solutions for Defence R&D Facilities",
    description:
      "After-sales support, preventive maintenance and troubleshooting assistance.",
    link: "/services/turnkey-solutions"
  },
  {
    title: "Customize Software Development & Technical Consultancy",
    description:
      "Application-oriented guidance to help customers select and use instruments effectively.",
    link: "/services/software-development"
  }
];

export const Services = (() => {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="Support beyond the sale."
        text="Practical support for installation, maintenance and day-to-day instrumentation requirements."
      />


      {/* SERVICES */}
      <section className="section">

        <div className="container service-grid">

          {services.map((service) => (

            <Link
              to={service.link}
              className="service-card-link"
              key={service.title}
            >

              <article className="service-card">

                <Wrench />

                <div className="service-card-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <span className="service-read-more">
                    Explore Service
                    <ArrowUpRight size={17} />
                  </span>

                </div>

              </article>

            </Link>

          ))}

        </div>

      </section>


      {/* SERVICE APPROACH */}
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
});

