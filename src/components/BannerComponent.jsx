import { Col, Container, Row, Button } from 'react-bootstrap';

const BannerComponent = () => {
    return (
        <div className='carousel' id="home">
        <Container>
            <Row className='banner'>
            <Col lg='6' className='d-flex align-items-center justify-content-center'>
                <div>
                <h1>Konsultasikan Keluhanan<br/>
                Anda <span>Bersama Kami.</span>
                </h1>
                <Button href='/bookappointment' className='primary-button'>Book Appointment</Button>
                </div>
            </Col>
            <Col lg='6' className='d-flex align-items-center justify-content-center'>
                <img className='img-fluid rounded-5' src="/src/assets/hero.png" alt="" />
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default BannerComponent;
