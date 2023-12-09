import { Col, Container, Row } from "react-bootstrap";

const BookAppointment = () => {
  return (
    <div className="section-bookappointment">
      <Container>
        <Row className="appointment-top">
          <Col className="text-center">
            <h1>Book Appointment</h1>
          </Col>
        </Row>
        <Row className="appointment-center">
          <Col lg="12">
            <div className="d-flex justify-content-between text-center">
              <div className="satu">
                <p>1</p>
                <p>Pilih Dokter</p>
              </div>
              <div className="dua">
                <p>2</p>
                <p>Isi Data Pasien</p>
              </div>
              <div className="tiga">
                <p>3</p>
                <p>Appointment</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookAppointment;
