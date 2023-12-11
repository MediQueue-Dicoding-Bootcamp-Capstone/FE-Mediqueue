import { Col, Container, Row, FormControl, InputGroup, Card, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const PilihdoctorComponent = () => {
  // Data dummy untuk doctor
  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      image: "https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      specialty: "Dermatologist",
      image: "https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Dr. Mark Johnson",
      specialty: "Orthopedic Surgeon",
      image: "https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Dr. Sarah Brown",
      specialty: "Pediatrician",
      image: "https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h3>Doctor</h3>
        </Col>
      </Row>
      <Row className="mt-3 m-0">
        <Col>
          <InputGroup>
            <InputGroup.Text style={{ border: "2px solid" }}>
              <Search />
            </InputGroup.Text>
            <FormControl type="text" placeholder="Search Doctor" style={{ border: "2px solid" }} />
          </InputGroup>
        </Col>
      </Row>
      <Row className="mt-5 m-0">
        {doctors.map((doctor) => (
          <Col key={doctor.id}>
            <Card className="card-doctor rounded-5" style={{ width: "18rem" }}>
              <Card.Img className="image-doctor rounded-top-5" variant="top" src={doctor.image} />
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Text>
                  Specialty: {doctor.specialty}
                </Card.Text>
                <Button className="primary-button w-100" variant="primary">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PilihdoctorComponent;
