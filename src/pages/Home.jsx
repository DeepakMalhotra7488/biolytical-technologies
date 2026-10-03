import {
 Link
} from "react-router-dom";

import {
  ChevronRight,
  ShieldCheck,
  Wrench,
  Headphones,
  Award,
  CheckCircle2,
  Send,
  FlaskConical,
  Gauge,
  Microscope,
  Factory 
} from "lucide-react";
import { OurClients } from "../components/OurClients";

const products = [
  {
    title: "Analytical Instruments",
    icon: FlaskConical,
    description:
      "Precision instruments for laboratory analysis, research and quality control.",
    image: "/images/product-analytical.svg",
    link: "/products/analytical"
  },
  {
    title: "Measuring Instruments",
    icon: Gauge,
    description:
      "Reliable measurement solutions for industrial and laboratory applications.",
    image: "/images/product-measuring.svg",
    link: "/products/measuring"
  },
  {
    title: "Testing Instruments",
    icon: Microscope,
    description:
      "Testing systems designed for accurate, repeatable and dependable results.",
    image: "/images/product-testing.svg",
    link: "/products/testing"
  },
  {
    title: "Processing Instruments",
    icon: Factory,
    description:
      "Practical processing and production instruments for demanding environments.",
    image: "/images/product-processing.svg",
    link: "/products/processing"
  }
];

export const Home=(()=>{

  return (
    <>

      <section className="hero">

        <div className="hero-bg"></div>

        <div className="container hero-content">

          <span className="eyebrow">
            PRECISION • QUALITY • SERVICE
          </span>

          <h1>
            Reliable Instruments.
            <br />
            <span>Accurate Results.</span>
          </h1>

          <p>
            Deals in sales and service of analytical,
            measuring, testing, and processing instruments
            for laboratory and industrial applications.
          </p>


          <div className="hero-actions">

            <Link
              to="/products"
              className="btn primary"
            >
              Explore Products
              <ChevronRight />
            </Link>

            <Link
              to="/contact"
              className="btn ghost"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>


      <section className="stats">

        <div className="container stats-grid">

          <div>

            <Award size={40}/>

            <strong>
              Quality
            </strong>

            <span>
              Dependable solutions
            </span>

          </div>


          <div>

            <ShieldCheck size={40}/>

            <strong>
              Accuracy
            </strong>

            <span>
              Precision-focused products
            </span>

          </div>


          <div>

            <Wrench size={40}/>

            <strong>
              Service
            </strong>

            <span>
              Technical support
            </span>

          </div>


          <div>

            <Headphones size={40}/>

            <strong>
              Support
            </strong>

            <span>
              Customer assistance
            </span>

          </div>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="eyebrow">
                WHAT WE OFFER
              </span>

              <h2>
                Instrumentation Solutions
              </h2>

            </div>


            <Link
              className="text-link"
              to="/products"
            >
              View All
              <ChevronRight />
            </Link>

          </div>


          <div className="product-grid">

            {products.map((product) => {

              const Icon = product.icon;

              return (
                <article
                  className="product-card"
                  key={product.title}
                >

                  <img
                    src={product.image}
                    alt={product.title}
                  />

                  <div className="product-body">

                    <div className="icon-box">
                      <Icon />
                    </div>

                    <h3>
                      {product.title}
                    </h3>

                    <p>
                      {product.description}
                    </p>

                    <Link to={product.link}>
                      Enquire
                      <ChevronRight size={16} />
                    </Link>

                  </div>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      <section className="split-section">

        <div className="container split">

          <div className="split-image">

            <img
              src="/images/lab.svg"
              alt="Laboratory instruments"
            />

          </div>


          <div className="split-copy">

            <span className="eyebrow">
              WHY CHOOSE US
            </span>

            <h2>
              Solutions backed by service.
            </h2>

            <p>
              We focus on supplying suitable instrumentation
              and supporting customers with dependable service
              throughout the equipment lifecycle.
            </p>


            <ul>

              <li>
                <CheckCircle2 />
                Application-focused product selection
              </li>

              <li>
                <CheckCircle2 />
                Installation and commissioning support
              </li>

              <li>
                <CheckCircle2 />
                Service and maintenance assistance
              </li>

              <li>
                <CheckCircle2 />
                Customer-first technical support
              </li>

            </ul>


            <Link
              to="/about"
              className="btn primary"
            >
              Know More
            </Link>

          </div>

        </div>

      </section>


       <OurClients/>


      <section className="cta">

        <div className="container cta-inner">

          <div>

            <span className="eyebrow">
              HAVE A REQUIREMENT?
            </span>

            <h2>
              Let's discuss your instrumentation needs.
            </h2>

          </div>


          <Link
            to="/contact"
            className="btn light"
          >
            Send An Enquiry
            <Send />
          </Link>

        </div>

      </section>

    </>
  );
}) 
