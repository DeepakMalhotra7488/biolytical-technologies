import React, { useEffect, useState } from "react";
import {PageHero} from "../components/PageHero";
import {Link} from "react-router-dom";


import {
  Phone,
  Send,
  Mail,
  MapPin,
  
} from "lucide-react";

export const Contact=(()=>{

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {

    event.preventDefault();

    setSubmitted(true);

  }


  return (
    <>

      <PageHero
        eyebrow="CONTACT"
        title="Tell us what you need."
        text="Share your requirement and our team can get back to you with relevant information."
      />


      <section className="section">

        <div className="container contact-grid">


          <div className="contact-info">

            <span className="eyebrow">
              GET IN TOUCH
            </span>

            <h2>
              Let's talk about your requirement.
            </h2>


            <div className="contact-item">

              <Phone />

              <div>

                <strong>
                  Phone
                </strong>

                <span>
                  +919289745747
                </span>

              </div>

            </div>


            <div className="contact-item">

              <Mail />

              <div>

                <strong>
                  Email
                </strong>

                <span>
                  sales@biolyticaltechnologies.com
                </span>

              </div>

            </div>


            <div className="contact-item">

              <MapPin />

              <div>

                <strong>
                  Address
                </strong>

                <span>
                  {/* Registered office: Plot no. 168, Vidya Vihar Colony, St. Johns School Road, Marhauli, Varanasi, Uttar Pradesh.- 221108 */}
                 R-9/309, Hare Krishna Marg, Sai Media Rajnagar, Ghaziabad, Uttar Pradesh. - 201002 
                </span>

              </div>

            </div>


            <div className="gst">

              <strong>
                GST No.
              </strong>

              <span>
                09BNDPS7223Q1Z8
              </span>

            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {submitted && (

              <div className="success">
                Thank you! Your enquiry has been received.
              </div>

            )}


            <label>

              Name

              <input
                required
                placeholder="Your name"
              />

            </label>


            <label>

              Email

              <input
                required
                type="email"
                placeholder="you@example.com"
              />

            </label>


            <label>

              Phone

              <input
                placeholder="+91"
              />

            </label>


            <label>

              Requirement

              <textarea
                required
                rows="5"
                placeholder="Tell us about your instrument or service requirement"
              />

            </label>


            <button
              type="submit"
              className="btn primary"
            >
              Send Enquiry
              <Send size={17} />
            </button>

          </form>

        </div>

      </section>

    </>
  );
}) 
