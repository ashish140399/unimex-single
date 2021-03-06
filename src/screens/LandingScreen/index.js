import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/Navabar";
import "./landing.scss";

const cardData = [
 
  {
    image: "col2.png",
    name: "Apemex",
    subTitle: "Margin Trading",
    link:"https://unimex.gitbook.io/apemex/",
    subTitleColor: "color_brown_light",
    glowStyle: {
      background:
        "radial-gradient(50% 50% at 50% 50%, #FFEE53 0%, rgba(167, 150, 0, 0) 100%)",
      mixBlendMode: "screen",
      // opacity: 0.5,
      filter: "blur(88px)",
      opacity:0.6
    },
    buttonColor: "button_brown",
  },
  {
    image: "col3.png",
    name: "Farm Space",
    subTitle: "Yield Farming",
    subTitleColor: "color_brown_light",
    link:"https://unimex.gitbook.io/spacex/",
    glowStyle: {
      background:
        "radial-gradient(50% 50% at 50% 50%, #FFB053 0%, rgba(176, 1, 1, 0) 100%)",
      mixBlendMode: "screen",
      filter: "blur(88px)",
      opacity:0.5
    },
    buttonColor: "button_chocolate",
  },
  {
    image: "col1.png",
    name: "Degen Protocol",
    subTitle: "Leverage Protocol (2022)",
    subTitleColor: "color_green_light",
    link:"https://unimex.gitbook.io/degen-protocol/",
    glowStyle: {
      background:
        "radial-gradient(50% 50% at 50% 50%, #F9FFB1 0%, rgba(78, 176, 1, 0) 100%)",
      mixBlendMode: "screen",
      filter: "blur(88px)",
      opacity:0.3
    },
    buttonColor: "button_green",
  },
];

export default function LandingScreen() {
  return (
    <div className="background">
      {/* <div className="overlay"></div> */}
      <NavigationBar />
      <main className="hero_section">
        <div>
          <Container>
            <Row className="align-items-center d-flex  flex-column flex-md-row">
              <Col className="p-5 d-flex align-item-center justify-content-center w-full  wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay="0.6s">
                <Image
                  src="/image/banner.png"
                  alt="Hero"
                  className="hero_image"
                />
              </Col>
              <Col className="pe-5 wow fadeInRight contenttext" data-wow-duration="0.6s" data-wow-delay="0.6s">
                <h4 className="text-white fw-bold">
                The Unimex Network is an interconnected ecosystem of DeFi applications.
                </h4>
                <p className="color_green hero_text fs-6 my-3">
                The main idea behind the network is to generate mutual incentive structures for the flow of capital. This will create a long-term feedback loop where value is redistributed between ecosystem token stakers and lenders, from across various chains and products.
                </p>
                <a href="https://unimex.gitbook.io/unimex-network/" target="_blank" style={{color:"#fff",textDecoration:"none"}}>
                <Button className="text-white fs-6 fw-bold mt-4">
                Learn More
                </Button>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
        <img src="image/overlay1.png" className="overlay1" />
      </main>

      <section className="py-5 pb-0 pb-md-5 my-5 mb-0 mb-md-5 card_section ">
        <Container className="py-5 px-5">
          <Row xs={1} md={3} className="align-items-center px-md-4">
            {cardData.map((card, index) => (
              <Col
                key={index}
                className="d-flex flex-column align-items-center mb-5 mb-md-0 wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.9s"
              >
                <div className="position-relative w-full d-flex align-item-center justify-content-center w-full">
                  <Image
                    src={`/image/${card.image}`}
                    alt="Degen"
                    className="w-full"
                  />
                  <div
                    className="position-absolute top-0 left-0 right-0 bottom-0 w-half"
                    zIndex="-1"
                    style={{
                      height: "100%",
                      ...card.glowStyle,
                    }}
                  ></div>
                </div>
                <h4 className="text-white">{card.name}</h4>
                <p className={card.subTitleColor}>{card.subTitle}</p>
                <a href={card.link} target="_blank" style={{color:"#fff",textDecoration:"none"}}>
                  <button
                    className={`btn text-white px-4 py-2 fw-bold mt-4  ${card.buttonColor}`}
                  >
                    Learn More
                  </button>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
        {/* <div className="bottom_overlay_image"></div> */}
        <img src="image/overlay2.png" className="overlay2" />
        
      </section>

      <Footer />
    </div>
  );
}
