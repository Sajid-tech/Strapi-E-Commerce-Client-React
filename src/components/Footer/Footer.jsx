import React from "react";
import "./Footer.scss";
import { FaMobileAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            iusto laudantium recusandae quo doloremque eaque est dolorum earum
            et deleniti commodi facilis voluptas quod, reiciendis fuga? Quas eum
            sunt ratione.
          </div>
        </div>

        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Newtown ,Action Area I ,North Paragans ,Kolata, WB,700156
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">phone: +91 8210175827</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: s.khan9430319425@gmail.com</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speaker</div>
          <div className="text">Wireless Earbuds</div>
          <div className="text">Home Theatre</div>
          <div className="text">Projectors</div>
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Terms & Conditions</div>
          <div className="text">Contact us</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            SDEVSTORE 2023 CREATED BY{" "}
            <a target="blank" href="https://www.linkedin.com/in/sajidhussain7/">
              SAJID HUSSAIN
            </a>{" "}
            PREMIUM E-COMMERCE WEBSITE
            <img src={Payment} alt="payment" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
