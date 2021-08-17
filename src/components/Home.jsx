import React from "react";
import "./css/home.css";
import { Container, Figure, Row, Col} from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({once: true,
      mirror: false,
    easing: "ease-in-out"});
  }, []);
  return (
    <>
    <div className="my-main">
      <Container fluid>
        <Row>
          <Col
            xl={2}
            className="d-flex justify-content-center align-items-center"
          >
            <div>
              <div className="my-5">
                <button
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  size="lg"
                  className="Lbadges"
                >
                  2 Windows
                </button>
              </div>
              <div className="my-5">
                <button
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  size="lg"
                  className="Lbadges"
                >
                  3 Laptops
                </button>
              </div>
              <div className="my-5">
                <button
                  data-aos="fade-right"
                  data-aos-duration="1400"
                  size="lg"
                  className="Lbadges"
                >
                  3 Person
                </button>
              </div>
              <div className="my-5">
                <button
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  size="lg"
                  className="Lbadges"
                >
                  4 Chairs
                </button>
              </div>
            </div>
          </Col>
          <Col xl={8}>
            <Figure className="my-5">
              <Figure.Image alt="171x180" src="/images/home1.png" />
            </Figure>
          </Col>
          <Col
            xl={2}
            className="d-flex justify-content-center align-items-center"
          >
            <div>
              <div className="my-5">
                <button
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  size="lg"
                  className="Rbadges"
                >
                  18 Book
                </button>
              </div>
              <div className="my-5">
                <button
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  size="lg"
                  className="Rbadges"
                >
                  1 Bag
                </button>
              </div>
              <div className="my-5">
                <button
                  data-aos="fade-left"
                  data-aos-duration="1400"
                  size="lg"
                  className="Rbadges"
                >
                  1 Table
                </button>
              </div>
              <div className="my-5">
                <button
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  size="lg"
                  className="Rbadges"
                >
                  4 Cup
                </button>
              </div>
            </div>
          </Col>
        </Row>

        {/*         <Row>
        <div className="d-flex justify-content-center">
          <Row xl={12}>
            <Col>
              <Figure className="my-5">
                <Figure.Image alt="171x180" src="/images/home2.png" />
              </Figure>
            </Col>
          </Row>
          <Row>
          <div className="d-flex justify-content-center">
            <div className="my-5 mx-3">
              <button
                data-aos="fade-right"
                data-aos-duration="1500"
                size="lg"
                className="Mlbadges"
              >
                Office environment
              </button>
            </div>

            <div className="my-5">
              <button
                data-aos="fade-left"
                data-aos-duration="1500"
                size="lg"
                className="Mrbadges"
              >
                WorkSpace or Meeting Room
              </button>
            </div>
          </div>
          </Row>
        </div>
        </Row> */}

        <Row>
          <Col xl={3} className="d-flex justify-content-center align-items-center">
          
            <div className="my-5 mx-3">
              <button
                data-aos="fade-right"
                data-aos-duration="1500"
                size="lg"
                className="Mlbadges"
              >
                Office environment
              </button>
            </div>
            
          </Col>
          <Col xl={6}>
            <div className="d-flex justify-content-center">
              <Figure className="my-5">
                <Figure.Image alt="171x180" src="/images/home29.png" />
              </Figure>
            </div>
          </Col>

          <Col xl={3} className="d-flex justify-content-center align-items-center">
          <div className="my-5">
              <button
                data-aos="fade-left"
                data-aos-duration="1500"
                size="lg"
                className="Mrbadges"
              >
                WorkSpace or Meeting Room
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default Home;
