import {Link} from "react-router-dom";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const Footer=(()=>{
    return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>

          <img
            className="footer-logo"
            src="/images/logo.png"
            alt="Biolytical Technologies"
          />

          <p>
            Deals in sales and service of analytical,
            measuring, testing, and processing instruments.
          </p>

        </div>


        <div>

          <h4>Quick Links</h4>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        <div>

          <h4>Contact</h4>

          <p>
            <Phone size={16} />
             ​+919889126501
          </p>

          <p>
            <Mail size={16} />
            sales@biolyticaltechnologies.com
          </p>

          <p className="footer-address">
            <MapPin size={16} />
           Registered office: Plot no. 168, Vidya Vihar Colony, St. Johns School Road, Marhauli, Varanasi, Uttar Pradesh.- 221108
          </p>

        {/* <p className="footer-contact-item">
            <BadgeIndianRupee size={18} />
            <span>GST No: 09BNDPS7223Q1Z8</span>
        </p> */}

        <div className="footer-contact-item">
            <span className="gst-icon"> GST </span>
            <span> GST No: 09BNDPS7223Q1Z8</span>
        </div>
        </div>

      </div>


      <div className="copyright">

        <div className="container">

          <span>
            © 2026 Biolytical Technologies.
            All Rights Reserved.
          </span>

        </div>

      </div>

    </footer>
  );
}) 

  
