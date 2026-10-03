
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown
} from "lucide-react";


const categories = [
  {
    title: "Radiation Measurement",
    description:
      "Measurement and monitoring of ionizing and non-ionizing radiation, dose, contamination and radiation levels."
  },
  {
    title: "Gas Measurement",
    description:
      "Measurement of gas concentration, composition, purity, flow, moisture and physical properties."
  },
  {
    title: "Electronic & RF Measurement",
    description:
      "Measurement and characterization of electronic signals, RF/microwave parameters, frequency, power, impedance and signal integrity."
  },
  {
    title: "Electrical Measurement",
    description:
      "Measurement of voltage, current, resistance, power, energy, frequency, insulation and electrical safety parameters."
  },
  {
    title: "Mechanical Measurement",
    description:
      "Measurement of force, torque, displacement, vibration, acceleration, speed, hardness and other mechanical parameters."
  },
  {
    title: "Flow Measurement",
    description:
      "Measurement and monitoring of liquid, gas and steam flow, including mass flow and volumetric flow."
  },
  {
    title: "Pressure Measurement",
    description:
      "Measurement of pressure, vacuum, differential pressure and related process parameters."
  },
  {
    title: "Chemical Measurement",
    description:
      "Measurement of pH, conductivity, ORP, ions, concentration and other chemical parameters."
  }
];

export function MeasuringInstruments() {
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
              Measuring
              <span> Instruments</span>
            </h1>

            <p>
              Reliable measurement solutions for industrial,
              laboratory, research and quality control applications.
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
                MEASURING SOLUTIONS
              </span>

              <h2>
                Explore Our
                <span> Categories</span>
              </h2>
            </div>

            <p>
              Explore our measuring instrument categories designed
              for accurate measurement, monitoring and
              characterization across different applications.
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
                    MEASURING
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
                Looking for a specific measuring solution?
              </h3>

              <p>
                Contact our team for product specifications,
                application guidance and technical assistance.
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

