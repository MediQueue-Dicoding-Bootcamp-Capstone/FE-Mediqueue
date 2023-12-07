import { Col, Container, Row } from "react-bootstrap"

const FacilitiesComponent = () => {
    return (
        <div id="facilities">
            <Container>
                <Row className="pt-5 text-center">
                    <Col>
                        <h1>Facilities</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="facility-top pt-5">
                    <Col lg='6' className='d-flex align-items-center justify-content-center'>
                        <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id alias tempora quo quae, ullam delectus aliquid numquam aliquam, minima nesciunt. Itaque autem vero maxime blanditiis eveniet esse fugit aliquam harum cum minima, porro consectetur corrupti ipsam repellat? Necessitatibus explicabo dolorem adipisci beatae doloribus temporibus atque natus reiciendis ullam expedita nesciunt, culpa architecto commodi cupiditate amet, aspernatur ut magni. Voluptates quo perspiciatis ducimus dolore expedita alias aspernatur corporis provident? Soluta obcaecati in perferendis nesciunt cupiditate nisi aut laboriosam similique beatae nam. Maiores, dolores alias assumenda commodi neque tempore obcaecati asperiores maxime molestiae quo nihil est ducimus sunt odio culpa cupiditate.</p>
                        </div>
                    </Col>
                    <Col lg='6' className='d-flex align-items-center justify-content-center'>
                        <img className='rounded-5' src="/src/assets/facility.png" alt="" />
                    </Col>
                </Row>
                <Row className="facility-bottom pt-5">
                    <Col lg='6' className='d-flex align-items-center justify-content-center'>
                        <img className='rounded-5' src="/src/assets/facility.png" alt="" />
                    </Col>
                    <Col lg='6' className='d-flex align-items-center justify-content-center'>
                        <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id alias tempora quo quae, ullam delectus aliquid numquam aliquam, minima nesciunt. Itaque autem vero maxime blanditiis eveniet esse fugit aliquam harum cum minima, porro consectetur corrupti ipsam repellat? Necessitatibus explicabo dolorem adipisci beatae doloribus temporibus atque natus reiciendis ullam expedita nesciunt, culpa architecto commodi cupiditate amet, aspernatur ut magni. Voluptates quo perspiciatis ducimus dolore expedita alias aspernatur corporis provident? Soluta obcaecati in perferendis nesciunt cupiditate nisi aut laboriosam similique beatae nam. Maiores, dolores alias assumenda commodi neque tempore obcaecati asperiores maxime molestiae quo nihil est ducimus sunt odio culpa cupiditate.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FacilitiesComponent