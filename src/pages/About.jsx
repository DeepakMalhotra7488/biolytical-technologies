import {PageHero} from "../components/PageHero";
import {
  Gauge,
  Headphones,
  ShieldCheck
} from "lucide-react";

export const About=(()=>{

  return (
    <>

      <PageHero
        eyebrow="ABOUT US"
        title="Precision that supports better decisions."
        text="A customer-focused instrumentation business serving analytical, measuring, testing and processing requirements."
      />


      <section className="section">

        <div className="container two-col">

          <div>

            <span className="eyebrow">
              OUR BUSINESS
            </span>

            <h2>
              Instrumentation for laboratory
              & industrial applications.
            </h2>

            <p>
              We deal in the sales and service of
              analytical, measuring, testing, and
              processing instruments.
            </p>

            <p>
              Our approach is centered on understanding
              application requirements, supplying suitable
              equipment and providing dependable
              after-sales support.
            </p>

          </div>


          <img
            className="rounded-image"
            src="/images/about.svg"
            alt="Instrumentation"
          />

        </div>

      </section>


      <section className="soft-section">

        <div className="container values-grid">

          <div>

            <ShieldCheck />

            <h3>
              Quality Focus
            </h3>

            <p>
              Products and service support selected around
              reliability and application needs.
            </p>

          </div>


          <div>

            <Gauge />

            <h3>
              Precision
            </h3>

            <p>
              Instrumentation solutions where accurate
              measurement and testing matter.
            </p>

          </div>


          <div>

            <Headphones />

            <h3>
              Customer Support
            </h3>

            <p>
              Responsive assistance before and after the sale.
            </p>

          </div>

        </div>

      </section>

    </>
  );
}) 