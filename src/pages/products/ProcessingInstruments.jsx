import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown
} from "lucide-react";

const categories = [
  {
    title: "Extrusion & Compounding Equipment",
    description:
      "Laboratory and pilot-scale systems for extrusion, blending, compounding and development of polymers and other materials."
  },
  {
    title: "Granulation & Pelletizing",
    description:
      "Equipment for particle formation, granulation, pellet production and controlled material sizing."
  },
  {
    title: "Milling & Grinding",
    description:
      "Systems for size reduction, grinding, pulverization and controlled particle-size processing."
  },
  {
    title: "Dispersion & Homogenization",
    description:
      "Equipment for uniform mixing, dispersion, emulsification and homogenization of liquids, powders and formulations."
  },
  {
    title: "Drying & Evaporation",
    description:
      "Systems for controlled removal of moisture, solvents and volatile components through drying and evaporation processes."
  },
  {
    title: "Filtration & Separation",
    description:
      "Equipment for solid-liquid, liquid-liquid and gas-solid separation, filtration and purification."
  },
  {
    title: "Reaction & Process Systems",
    description:
      "Laboratory and pilot-scale reactors and systems for controlled chemical and physical reactions."
  },
  {
    title: "Process Monitoring",
    description:
      "In-process monitoring, measurement and control of critical process parameters for development and scale-up."
  },
  {
    title: "Thermal Processing",
    description:
      "Equipment for controlled heating, cooling, thermal treatment and temperature-dependent processing."
  },
  {
    title: "Laboratory & Customized Processing Solutions",
    description:
      "Application-specific laboratory, pilot-scale and customized processing systems designed, integrated and supplied for specific customer requirements."
  }
];

export function ProcessingInstruments() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="product-category-page">

      {/* HERO */}
      <section className="product-category-hero">
        <div className="container">

          <Link to="/products" className="product-back-link">
            <ArrowLeft size={17} />
            Back to Products
          </Link>

          <div className="product-category-hero-content">

            <span className="eyebrow">
              PRODUCT CATEGORY
            </span>

            <h1>
              Processing
              <span> Instruments</span>
            </h1>

            <p>
              Laboratory, pilot-scale and customized processing
              solutions for material development, process
              optimization and scale-up applications.
            </p>

          </div>

        </div>
      </section>


      {/* CATEGORIES */}
      <section className="section product-category-section">
        <div className="container">

          <div className="product-category-heading">

            <div>

              <span className="eyebrow">
                PROCESSING SOLUTIONS
              </span>

              <h2>
                Explore Our
                <span> Categories</span>
              </h2>

            </div>

            <p>
              Explore our processing instrument categories designed
              for material processing, laboratory development,
              pilot-scale operations and customized applications.
            </p>

          </div>


          <div className="product-category-grid">

            {categories.map((category, index) => (

              <div
                className={`product-category-card ${
                  openIndex === index ? "category-open" : ""
                }`}
                key={category.title}
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
                    {category.title}
                  </h3>


                  {openIndex === index && (

                    <p className="category-description">
                      {category.description}
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
                    PROCESSING
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
                NEED MORE INFORMATION?
              </span>

              <h3>
                Looking for a specific processing solution?
              </h3>

              <p>
                Contact our team for product specifications,
                application guidance and customized technical
                assistance.
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

