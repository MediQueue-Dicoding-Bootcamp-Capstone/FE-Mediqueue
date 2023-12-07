import { Col, Container, Row } from "react-bootstrap"

const FooterComponent = () => {
  return (
    <section className="footer">
      <Container>
        <Row className="footer-top">
          <Col lg='4' className="d-flex align-items-center justify-content-start">
            <div>
            <h4>About Us</h4>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            </div>
          </Col>
          <Col lg='4' className="d-flex align-items-center justify-content-center">
            <div>
            <h4>About Us</h4>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            </div>
          </Col>
          <Col lg='4' className="d-flex align-items-center justify-content-end">
            <div>
            <h4>About Us</h4>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col>
          Copyright 2023 | Klinik Citra. All Rights Reserved <br />
          Designed by Tim Capstone 1, Bootcamp Dicoding #1
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FooterComponent