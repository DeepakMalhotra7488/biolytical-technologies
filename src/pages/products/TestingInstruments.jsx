import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const categories = [
  "Fire & Safety Testing",
  "Dimensional & Metrology Testing",
  "Radiation Testing",
  "Battery & Energy Testing"
];


export function TestingInstruments() {

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
              Testing
              <span> Instruments</span>
            </h1>

            <p>
              Advanced testing solutions designed for accurate,
              repeatable and dependable testing applications.
            </p>

          </div>

        </div>

      </section>


      <section className="section product-category-section">

        <div className="container">

          <div className="product-category-heading">

            <div>

              <span className="eyebrow">
                TESTING SOLUTIONS
              </span>

              <h2>
                Explore Our
                <span> Categories</span>
              </h2>

            </div>


            <p>
              Explore our testing instrument categories for
              safety, dimensional, radiation and energy testing.
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
                    TESTING
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
                Looking for a specific testing solution?
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

