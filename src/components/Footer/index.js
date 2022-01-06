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
          <a target="_blank" href="https://twitter.com/UniMex_Network"><i class="fab fa-twitter"></i></a>
          </div>
          <div className="icon">
          <a target="_blank" href="https://t.me/UniMexNetwork"><i class="fab fa-telegram-plane"></i></a>
          </div>
          <div className="icon">
          <a target="_blank" href="https://discord.gg/Kj4P8Q8"><i class="fab fa-discord"></i></a>
          </div>
          <div className="icon">
          <a target="_blank" href="https://unimex.medium.com/"><i class="fab fa-medium-m"></i></a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
