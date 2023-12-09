import { useState, useEffect } from "react";
import { Col, Container, Row, Form, FormControl, Nav, NavDropdown, Button } from "react-bootstrap";

const BookAppointment = () => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Handle color changes based on the current step
    // You can customize the colors as needed
    const satuDiv = document.querySelector(".satu");
    const duaDiv = document.querySelector(".dua");
    const tigaDiv = document.querySelector(".tiga");

    switch (currentStep) {
      case 1:
        satuDiv.style.backgroundColor = "yellow";
        duaDiv.style.backgroundColor = "";
        tigaDiv.style.backgroundColor = "";
        break;
      case 2:
        satuDiv.style.backgroundColor = "yellow";
        duaDiv.style.backgroundColor = "yellow";
        tigaDiv.style.backgroundColor = "";
        break;
      case 3:
        satuDiv.style.backgroundColor = "yellow";
        duaDiv.style.backgroundColor = "yellow";
        tigaDiv.style.backgroundColor = "yellow";
        break;
      default:
        break;
    }
  }, [currentStep]);

  const handleNextStep = () => {
    // Increment the currentStep when the "Next" button is clicked
    setCurrentStep((prevStep) => (prevStep < 3 ? prevStep + 1 : 3));
  };

  const handlePrevStep = () => {
    // Decrement the currentStep when the "Back" button is clicked
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
  };

  return (
    <div className="section-bookappointment">
      <Container>
        <Row className="appointment-top">
          <Col className="text-center">
            <h1>Book Appointment</h1>
          </Col>
        </Row>
        <Row className="appointment-center pt-5">
          <Col lg="12">
            <div className="d-flex justify-content-between text-center">
              <div className="satu">
                <p>1</p>
                <p>Pilih Dokter</p>
              </div>
              <div className="garis"></div>
              <div className="dua">
                <p>2</p>
                <p>Isi Data Pasien</p>
              </div>
              <div className="garis"></div>
              <div className="tiga">
                <p>3</p>
                <p>Appointment</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <h2>Doctors</h2>
          </Col>
        </Row>
        <Row className="searchDoctor pt-3">
          <Col lg="9">
            <Form>
              <FormControl type="text" placeholder="Search for a doctor" />
            </Form>
          </Col>
          <Col lg="3">
            <Nav className="ms-auto justify-content-end">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <Button onClick={handlePrevStep} className="mr-2" disabled={currentStep === 1}>Back</Button>
            <Button onClick={handleNextStep} disabled={currentStep === 3}>Next</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookAppointment;
