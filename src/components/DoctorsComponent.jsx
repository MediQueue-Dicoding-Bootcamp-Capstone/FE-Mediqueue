import {Container, Row, Col, Card } from "react-bootstrap"

const DoctorsComponent = () => {
    return (
        <section className="w-100" id="doctors">
            <Container>
                <Row>
                    <Col className="pt-5">
                        <h1 className="text-center">Doctors</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                {dataDoctor.map((item, index) => (
                    <Col key={index} className="pt-5 d-flex justify-content-center">
                        <Card className="card-doctor rounded-5" style={{ width: '18rem' }}>
                            <Card.Img className="image-doctor rounded-top-5" variant="top" src={item.imageUrl} />
                            <Card.Body className="description-doctor">
                                <Card.Title>
                                    <h4>{item.title}</h4>
                                </Card.Title>
                                <Card.Text>
                                    <p>{item.description}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        </section>
    )
}

// data 
const dataDoctor = [
    {
        id: '1',
        title: 'Dr.Jhon Doe',
        description: 'Jam : 07.30 - 12.00',
        imageUrl: '/src/assets/doctor.jpg',
    },
    {
        id: '2',
        title: 'Dr.Jhon Doe',
        description: 'Jam : 07.30 - 12.00',
        imageUrl: '/src/assets/doctor.jpg',
    },
    {
        id: '3',
        title: 'Dr.Jhon Doe',
        description: 'Jam : 07.30 - 12.00',
        imageUrl: '/src/assets/doctor.jpg',
    },
    {
        id: '4',
        title: 'Dr.Jhon Doe',
        description: 'Jam : 07.30 - 12.00',
        imageUrl: '/src/assets/doctor.jpg',
    },
];

export default DoctorsComponent