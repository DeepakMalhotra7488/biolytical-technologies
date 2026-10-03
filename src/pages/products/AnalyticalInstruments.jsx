import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";

const categories = [
  {
    title: "Spectroscopy & Optical Analysis",
    description:
      "UV-Vis, FTIR, NIR, Raman, fluorescence and other optical techniques for identification and characterization."
  },
  {
    title: "Chromatography & Separation Science",
    description:
      "GC, HPLC, UHPLC, IC, GPC/SEC and other techniques for separation, identification and quantification."
  },
  {
    title: "Mass Spectrometry",
    description:
      "GC-MS, LC-MS, ICP-MS and high-resolution MS for molecular and trace-level analysis."
  },
  {
    title: "Thermal Analysis",
    description:
      "DSC, TGA, DMA, TMA and related techniques for studying thermal and thermo-mechanical properties."
  },
  {
    title: "Electrochemical Analysis",
    description:
      "pH, conductivity, ion analysis, titration, potentiometry and electrochemical characterization."
  },
  {
    title: "Microscopy & Imaging",
    description:
      "Optical microscopy, SEM, TEM, AFM and imaging technologies for morphology and microstructural analysis."
  },
  {
    title: "X-ray & Structural Analysis",
    description:
      "XRD, XRF, XPS and related techniques for structural, phase and elemental characterization."
  },
  {
    title: "Elemental & Combustion Analysis",
    description:
      "AAS, ICP-OES, CHNS/O, carbon-sulfur and related techniques for elemental and composition analysis."
  }
];

export function AnalyticalInstruments() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="product-category-page">

      <section className="product-category-hero">

        <div className="container">

          <Link
            to="/products"
            className="product-back-link"
          >
            <ArrowLeft size={17} />
            Back to Products
          </Link>

          <div className="product-category-hero-content">

            <span className="eyebrow">
              PRODUCT CATEGORY
            </span>

            <h1>
              Analytical
              <span> Instruments</span>
            </h1>

            <p>
              Precision analytical solutions for laboratory research,
              characterization, testing and quality control applications.
            </p>

          </div>

        </div>

      </section>


      <section className="section product-category-section">

        <div className="container">

          <div className="product-category-heading">

            <div>

              <span className="eyebrow">
                ANALYTICAL SOLUTIONS
              </span>

              <h2>
                Explore Our
                <span> Categories</span>
              </h2>

            </div>

            <p>
              Explore our analytical instrument categories designed
              for research, testing and laboratory applications.
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

                <div className="category-top">

                  <span className="category-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    className="category-arrow"
                    size={20}
                  />

                </div>


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


                <div className="category-bottom">

                  <span>
                    ANALYTICAL
                  </span>

                  <div className="category-line" />

                </div>

              </div>

            ))}

          </div>


          <div className="product-category-cta">

            <div>

              <span className="eyebrow">
                NEED MORE INFORMATION?
              </span>

              <h3>
                Looking for a specific analytical solution?
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

