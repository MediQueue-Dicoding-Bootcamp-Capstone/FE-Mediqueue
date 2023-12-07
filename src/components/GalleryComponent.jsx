import { Container, Row, Col } from 'react-bootstrap';

const GalleryComponent = () => {
    return (
        <section id='gallery' className='pb-5'>
        <Container>
            <Row>
            <Col className="pt-5">
                <h1 className='text-center'>Gallery</h1>
            </Col>
            </Row>
        </Container>
        <Container>
            <Row>
            <Col lg='6' className="pt-5">
                <div className="image-container">
                <img className='img-fluid rounded-5' src="https://images.unsplash.com/photo-1581982231900-6a1a46b744c9?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </Col>
            <Col lg='6' className="pt-5">
                <div className="image-container">
                <img className='img-fluid rounded-5' src="https://images.unsplash.com/photo-1581982231900-6a1a46b744c9?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </Col>
            <Col lg='6' className="pt-5">
                <div className="image-container">
                <img className='img-fluid rounded-5' src="https://images.unsplash.com/photo-1581982231900-6a1a46b744c9?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </Col>
            <Col lg='6' className="pt-5">
                <div className="image-container">
                <img className='img-fluid rounded-5' src="https://images.unsplash.com/photo-1581982231900-6a1a46b744c9?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </Col>
            </Row>
        </Container>
        </section>
    );
};

export default GalleryComponent;
