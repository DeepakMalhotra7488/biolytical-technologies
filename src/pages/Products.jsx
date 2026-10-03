
import { PageHero } from "../components/PageHero";
import {Link} from "react-router-dom";

import {
  ChevronRight,
  FlaskConical,
  Gauge,
  Microscope,
  Factory
} from "lucide-react";


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


export const Products = (() => {

  return (
    <>

      <PageHero
        eyebrow="PRODUCTS"
        title="Instrumentation solutions for demanding applications."
        text="Explore our core categories. Contact us for specifications, availability and application guidance."
      />


      <section className="section">

        <div className="container product-list">

          {products.map((product) => {

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

                  <h2>
                    {product.title}
                  </h2>


                  <p>
                    {product.description}
                  </p>


                  <Link
                    to={product.link}
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

});

