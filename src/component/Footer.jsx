import "../style/FooterC.css";

import {
  MapPin,
  Clock3,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="newsletter">
        <div className="newsletter-content">

          <div className="newsletter-left">

            <h2>Subscribe</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus asperiores saepe magni.
            </p>

            <div className="newsletter-form">

              <input
                type="email"
                placeholder="Enter your Email Address"
              />

              <button>
                Subscribe Now
              </button>

            </div>

          </div>

          <div className="newsletter-right">
           
          </div>

        </div>
      </section>

  
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-box">

            <h3>Contact Us</h3>

            <p>
              Address: amet, consetetur sadipscing elitr, sed diam.
            </p>

            <p>Email: example@email.com</p>

            <p>Phone: +91 9876543210</p>

          </div>

     
          <div className="footer-box">

            <h3>Follow Us</h3>

            <div className="social-icons">

              <FaFacebookF />

              <FaLinkedinIn />

              <FaInstagram />

              <FaTwitter />

              <FaYoutube />

            </div>

          </div>

   
          <div className="footer-box">

            <h3>Head Office</h3>

            <p>
              <MapPin size={18} />
              Lorem ipsum dolor sit amet.
            </p>

            <p>
              <Clock3 size={18} />
              Mon - Sat : 09 AM - 06 PM
            </p>

            <p>
              <Phone size={18} />
              +91 9876543210
            </p>

            <p>
              <Mail size={18} />
              info@example.com
            </p>

          </div>

        </div>

        <div className="copyright">
          © 2025 All Rights Reserved | Privacy Policy
        </div>

      </footer>
    </>
  );
};

export default Footer;