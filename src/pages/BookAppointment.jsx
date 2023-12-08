import { Row, Col, Card, Form, Button } from "react-bootstrap";

const BookAppointment = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="cardappointment p-0">
        <Col lg="6" className="p-0">
          <div className="cardleft">
          <Card className="card p-0 w-100 h-100" style={{ width: '18rem' }}>
            <Card.Img className="image" variant="top" src="/src/assets/doctor.jpg" />
            <Card.Body className="text-center pt-5">
              <Card.Title>
                <h4>Dr. Jhon Doe</h4>
              </Card.Title>
              <Card.Text>
                <p>Spesialis Penyakit Dalam</p>
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </Col>
        <Col lg="6" className="p-4">
          <h2 className="text-center" style={{ color: '#082743' }}>Biodata Diri</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" placeholder="Enter your address" style={{ height: '100px' }} />
            </Form.Group>

            <Form.Group controlId="formType">
              <Form.Label>Select Type</Form.Label>
              <Form.Control as="select">
                <option value="bpjs">BPJS</option>
                <option value="asuransi">Asuransi</option>
                <option value="mandiri">Mandiri</option>
              </Form.Control>
            </Form.Group>

            {/* Add more form fields as needed */}
            
            <div className="pt-4">
                <Button className="primary-button w-100" variant="primary" type="submit">
                Create Appointment
                </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default BookAppointment;
