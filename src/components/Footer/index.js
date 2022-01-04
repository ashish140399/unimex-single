import React from "react";
import { Container } from "react-bootstrap";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <Container className="footer  wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.9s">
        <p>Unimex 2022</p>
        <div className="d-flex gap-2">
          <div className="icon">
          <i className="fab fa-twitter"></i>
          </div>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
          </div>
        </div>
      </Container>
    </footer>
  );
}
