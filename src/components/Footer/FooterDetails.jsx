import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { SiXdadevelopers } from "react-icons/si";
import SignUpForm from "./SignUpForm";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

export default function FooterDetails() {
  return (
    <div className="footer-parent">
        <div className="footer-details-holder">
        <div className="footer-holder">
        <h4>Customer Support</h4>
        <span>Contact Us</span>
        <span>Help Centre</span>
        <span>Returns & Exchanges</span>
        <span>About ShopSphere</span>
      </div>

      <div className="footer-holder">
        <h4>Account</h4>
        <span>Order Status</span>
        <span>Manage Account</span>
        <span>Preference Centre</span>
        <span>Personal Information Request</span>
      </div>

      <div className="footer-holder">
        <h4>Services</h4>
        <span>Geek Squad</span>
        <span>ShopSphere Membership</span>
        <span>Monthly Subscription</span>
        <span>ShopSphere Financing</span>
        <span>Trade-In Program</span>
      </div>

      <div className="footer-holder">
        <h4>About Us</h4>
        <span>Careers</span>
        <span>Corporate Information</span>
        <span>Newsroom</span>
        <span>Our Commitment to the Environment</span>
        <span>ShopSphere Worldwide</span>
      </div>

      <div className="footer-holder mobile-icon">
        <h4>Mobile Apps</h4>
        <span>
          <IoLogoAndroid /> Android App
        </span>
        <span>
          <FaApple /> iOS App
        </span>
        <span>
          <SiXdadevelopers /> Developer: Joelinton
        </span>
      </div>
        </div>
      

      <div className="footer-signUp-holder">
        <h4>Stay informed ahead of others</h4>
        <span>
          Sign up to remain updated on the latest deals, newest products, and
          exclusive sales events.
        </span>
        <h4>How does ShopSphere use my email address?</h4>
        <span>
          ShopSphere uses your email address solely for the purpose of sending
          you updates, promotions, and important information related to its
          products and services. Your email address is not shared with third
          parties and is kept confidential in accordance with ShopSphere's
          privacy policy.
        </span>
        <SignUpForm />
        <div className="footer-media-links">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <FaXTwitter />
          </span>
        </div>
      </div>
    </div>
  );
}
