import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const categories = [
  "Extrusion & Compounding Equipment",
  "Granulation",
  "Pelletizing",
  "Milling",
  "Grinding",
  "Dispersion",
  "Homogenization",
  "Drying",
  "Evaporation",
  "Filtration",
  "Separation",
  "Reaction",
  "Process Monitoring",
  "Thermal and Laboratory Customized Processing Solution"
];


export function ProcessingInstruments() {

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
              Processing
              <span> Instruments</span>
            </h1>

            <p>
              Practical processing and laboratory solutions for
              demanding research, development and production environments.
            </p>

          </div>

        </div>

      </section>


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
              Explore our processing categories covering laboratory,
              research, development and customized processing requirements.
            </p>

          </div>


          <div className="product-category-grid">

            {categories.map((category, index) => (

              <div
                className="product-category-card"
                key={category}
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
                    {category}
                  </h3>

                </div>


                <div className="category-bottom">

                  <span>
                    PROCESSING
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
                Looking for a specific processing solution?
              </h3>

              <p>
                Contact our team for product specifications,
                application guidance and customized technical solutions.
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

