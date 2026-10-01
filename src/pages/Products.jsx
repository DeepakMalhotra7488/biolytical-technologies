import {PageHero} from "../components/PageHero";
import {
 Link
} from "react-router-dom";
const products = [
  {
    title: "Analytical Instruments",
    icon: FlaskConical,
    description:
      "Precision instruments for laboratory analysis, research and quality control.",
    image: "/images/product-analytical.svg"
  },
  {
    title: "Measuring Instruments",
    icon: Gauge,
    description:
      "Reliable measurement solutions for industrial and laboratory applications.",
    image: "/images/product-measuring.svg"
  },
  {
    title: "Testing Instruments",
    icon: Microscope,
    description:
      "Testing systems designed for accurate, repeatable and dependable results.",
    image: "/images/product-testing.svg"
  },
  {
    title: "Processing Instruments",
    icon: Factory,
    description:
      "Practical processing and production instruments for demanding environments.",
    image: "/images/product-processing.svg"
  }
];

import {
  ChevronRight,
  FlaskConical,
  Gauge,
  Microscope,
  Factory
} from "lucide-react";

export const Products=(()=>{
  return (
    <>
      <PageHero
        eyebrow="PRODUCTS"
        title="Instrumentation solutions for demanding applications."
        text="Explore our core categories. Contact us for specifications, availability and application guidance."
      />


      <section className="section">

        <div className="container product-list">

          {products.map((product, index) => {

            const Icon = product.icon;

            return (
              <article
                className="product-row"
                key={product.title}
              >

                <img
                  src={product.image}
                  alt={product.title}
                />


                <div>

                  <span className="number">
                    0{index + 1}
                  </span>

                  <h2>
                    {product.title}
                  </h2>

                  <p>
                    {product.description}
                  </p>

                  <Link
                    to="/contact"
                    className="text-link"
                  >
                    Request Details
                    <ChevronRight />
                  </Link>

                </div>


                <Icon className="row-icon" />

              </article>
            );

          })}

        </div>

      </section>

    </>
  );
})
