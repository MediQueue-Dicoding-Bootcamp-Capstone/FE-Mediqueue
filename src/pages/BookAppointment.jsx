import { useState, useEffect } from "react";
import { Col, Container, Row, Form, FormControl, Nav, NavDropdown, Button } from "react-bootstrap";

const BookAppointment = () => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Handle color changes based on the current step
    // You can customize the colors as needed
    const divAngka1 = document.querySelector(".angka1")
    const divAngka2 = document.querySelector(".angka2")
    const divAngka3 = document.querySelector(".angka3")

    const divText1 = document.querySelector(".text1")
    const divText2 = document.querySelector(".text2")
    const divText3 = document.querySelector(".text3")

    switch (currentStep) {
      case 1:
        divAngka3.style.color = ""
        divAngka3.style.backgroundColor = "";
        divAngka3.style.padding = "10px";
        divAngka3.style.borderRadius = "20px";
        divAngka2.style.color = "";
        divAngka2.style.backgroundColor = "";
        divAngka2.style.padding = "10px";
        divAngka2.style.borderRadius = "20px";
        divAngka1.style.color = "#ffffff";
        divAngka1.style.backgroundColor = "#E99006";
        divAngka1.style.padding = "10px";
        divAngka1.style.borderRadius = "20px";

        divText1.style.color = "#E99006"
        divText2.style.color = ""
        divText3.style.color = ""
        break;
      case 2:
        divAngka3.style.color = ""
        divAngka3.style.backgroundColor = "";
        divAngka3.style.padding = "10px";
        divAngka3.style.borderRadius = "20px";
        divAngka2.style.color = "#ffffff";
        divAngka2.style.backgroundColor = "#E99006";
        divAngka2.style.padding = "10px";
        divAngka2.style.borderRadius = "20px";
        divAngka1.style.color = "#ffffff";
        divAngka1.style.backgroundColor = "#E99006";
        divAngka1.style.padding = "10px";
        divAngka1.style.borderRadius = "20px";

        divText1.style.color = "#E99006"
        divText2.style.color = "#E99006"
        divText3.style.color = ""
        break;
      case 3:
        divAngka3.style.color = "#ffffff"
        divAngka3.style.backgroundColor = "#E99006";
        divAngka3.style.padding = "10px";
        divAngka3.style.borderRadius = "20px";
        divAngka2.style.color = "#ffffff";
        divAngka2.style.backgroundColor = "#E99006";
        divAngka2.style.padding = "10px";
        divAngka2.style.borderRadius = "20px";
        divAngka1.style.color = "#ffffff";
        divAngka1.style.backgroundColor = "#E99006";
        divAngka1.style.padding = "10px";
        divAngka1.style.borderRadius = "20px";

        divText1.style.color = "#E99006"
        divText2.style.color = "#E99006"
        divText3.style.color = "#E99006"
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
                <p className="angka1">1</p>
                <p className="text1">Pilih Dokter</p>
              </div>
              <div className="garis"></div>
              <div className="dua">
                <p className="angka2">2</p>
                <p className="text2">Isi Data Pasien</p>
              </div>
              <div className="garis"></div>
              <div className="tiga">
                <p className="angka3">3</p>
                <p className="text3">Appointment</p>
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
          <Col lg="10">
            <Form>
              <FormControl type="text" placeholder="Search for a doctor" />
            </Form>
          </Col>
          <Col lg="2">
            <Nav className="ms-auto justify-content-end">
              <NavDropdown title="Jenis Dokter" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">doctor gigi</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">doctor penyakit dalam</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">doctor saraf</NavDropdown.Item>
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
