import { Container, Row, Col, Alert } from "react-bootstrap";

const NotifappointmentComponent = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8}>
          <Alert variant="success" className="d-flex align-items-center">
            <Col xs={10}>
              <Alert.Heading className="mb-1">Success!</Alert.Heading>
              <p className="mb-0">
                Anda telah berhasil melakukan appointment di Klinik Citra dengan
                Dr. John Doe, Anda terdaftar pada antrian dengan no antrian
                ke-1. Silakan datang sebelum jam 07.30 WIB.
              </p>
            </Col>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default NotifappointmentComponent;
