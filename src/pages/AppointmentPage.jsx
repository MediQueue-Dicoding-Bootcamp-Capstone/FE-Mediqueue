import { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { CheckCircle, Circle } from "react-bootstrap-icons";
import PilihdoctorComponent from "../components/PilihdoctorComponent";
import FormpasienComponent from "../components/FormpasienComponent";
import NotifappointmentComponent from "../components/NotifappointmentComponent";

const AppointmentPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [showComponent, setShowComponent] = useState(null);

  const handleStepClick = (step) => {
    setActiveStep(step);
    updateComponent(step);
  };

  const handleNext = () => {
    const nextStep = Math.min(activeStep + 1, 3);
    setActiveStep(nextStep);
    updateComponent(nextStep);
  };

  const handleBack = () => {
    const prevStep = Math.max(activeStep - 1, 1);
    setActiveStep(prevStep);
    updateComponent(prevStep);
  };

  const updateComponent = (step) => {
    switch (step) {
      case 1:
        setShowComponent(<PilihdoctorComponent />);
        break;
      case 2:
        setShowComponent(<FormpasienComponent />);
        break;
      case 3:
        setShowComponent(<NotifappointmentComponent />);
        break;
      default:
        setShowComponent(null);
        break;
    }
  };

  // Efek samping untuk memanggil updateComponent saat komponen pertama kali dimuat
  useEffect(() => {
    updateComponent(activeStep);
  }, [activeStep]);

  const renderStep = (stepNumber, text) => {
    const isActive = activeStep >= stepNumber;

    const boxStyle = {
      backgroundColor: isActive ? "#E99006" : "#FFFFFF",
      color: isActive ? "#FFFFFF" : "#082743",
      border: `2px solid ${isActive ? "#E99006" : "#082743"}`,
    };

    return (
      <div
        className={`box d-flex align-items-center justify-content-center ${
          isActive ? "active" : ""
        }`}
        style={boxStyle}
        onClick={() => handleStepClick(stepNumber)}
      >
        {isActive ? (
          <CheckCircle size={24} className="me-2" />
        ) : (
          <Circle size={24} className="me-2" />
        )}
        <p className={`m-0 ${isActive ? "active-text" : ""}`}>{text}</p>
      </div>
    );
  };

  return (
    <div className="section-appointment vh-100">
      <Container>
        <Row className="mt-5">
          <Col className="text-center">
            <h3>Book Appointment</h3>
          </Col>
        </Row>
        <Row className="mt-5 gx-0">
          <Col className="text-center d-flex align-items-center justify-content-center">
            {renderStep(1, "choose a doctor")}
          </Col>
          <Col className="text-center d-flex align-items-center justify-content-center">
            {renderStep(2, "patient data")}
          </Col>
          <Col className="text-center d-flex align-items-center justify-content-center">
            {renderStep(3, "Appointment")}
          </Col>
        </Row>
        {showComponent}
        <Row className="mt-3">
          <Col className="text-center">
            <Button
              variant="secondary"
              onClick={handleBack}
              disabled={activeStep === 1}
            >
              Back
            </Button>{" "}
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={activeStep === 3}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppointmentPage;
