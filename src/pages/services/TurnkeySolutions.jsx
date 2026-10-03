
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown
} from "lucide-react";



const solutionAreas = [
  {
    title: "Turnkey Analytical Solutions",
    description:
      "End-to-end design, integration and implementation of analytical laboratories and analytical systems, covering application assessment, system design, instrument selection, sample preparation, automation, data management, installation, commissioning, validation, training and after-sales support."
  },
  {
    title: "Customized Analytical Solutions",
    description:
      "Development and integration of application-specific analytical systems combining instruments, accessories, software and supporting infrastructure to meet defined customer requirements."
  },
  {
    title: "Laboratory Setup & Modernization",
    description:
      "Complete analytical laboratory setup, expansion, modernization and technology upgrades, including equipment integration and workflow optimization."
  },
  {
    title: "Process & Pilot-Scale Analytical Solutions",
    description:
      "Integrated analytical and monitoring systems for laboratory, pilot-scale and process-development applications."
  },
  {
    title: "Project Engineering & Integration",
    description:
      "Complete project coordination, system integration, installation, commissioning and performance verification from concept to operational handover."
  }
];

export function TurnkeySolutions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="product-category-page">

      {/* HERO */}
      <section className="product-category-hero">
        <div className="container">

          <Link
            to="/services"
            className="product-back-link"
          >
            <ArrowLeft size={17} />
            Back to Services
          </Link>

          <div className="product-category-hero-content">

            <span className="eyebrow">
              SERVICE CATEGORY
            </span>

            <h1>
              Turnkey
              <span> Solutions</span>
            </h1>

            <p>
              End-to-end analytical solutions for Defence R&D
              facilities, laboratories, pilot-scale environments
              and specialized technical applications.
            </p>

          </div>

        </div>
      </section>


      {/* SOLUTION AREAS */}
      <section className="section product-category-section">
        <div className="container">

          <div className="product-category-heading">

            <div>

              <span className="eyebrow">
                TURNKEY SOLUTIONS
              </span>

              <h2>
                Our Solution
                <span> Areas</span>
              </h2>

            </div>

            <p>
              From laboratory setup and system integration to
              customized analytical solutions, we provide
              application-focused support across the complete
              project lifecycle.
            </p>

          </div>


          <div className="product-category-grid">

            {solutionAreas.map((solution, index) => (

              <div
                className={`product-category-card ${
                  openIndex === index ? "category-open" : ""
                }`}
                key={solution.title}
              >

                {/* TOP */}
                <div className="category-top">

                  <span className="category-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    className="category-arrow"
                    size={20}
                  />

                </div>


                {/* CONTENT */}
                <div className="category-content">

                  <h3>
                    {solution.title}
                  </h3>


                  {openIndex === index && (

                    <p className="category-description">
                      {solution.description}
                    </p>

                  )}


                  <button
                    type="button"
                    className="category-read-more"
                    onClick={() => toggleDescription(index)}
                  >

                    {openIndex === index
                      ? "Read Less"
                      : "Read More"}

                    <ChevronDown
                      size={16}
                      className={
                        openIndex === index
                          ? "rotate-arrow"
                          : ""
                      }
                    />

                  </button>

                </div>


                {/* BOTTOM */}
                <div className="category-bottom">

                  <span>
                    TURNKEY
                  </span>

                  <div className="category-line" />

                </div>

              </div>

            ))}

          </div>


          {/* CTA */}
          <div className="product-category-cta">

            <div>

              <span className="eyebrow">
                NEED TECHNICAL ASSISTANCE?
              </span>

              <h3>
                Looking for a turnkey analytical solution?
              </h3>

              <p>
                Contact our team to discuss your laboratory,
                analytical system or project requirements.
              </p>

            </div>


            <Link
              to="/contact"
              className="product-cta-button"
            >
              Contact Us
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

