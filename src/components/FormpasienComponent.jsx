import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const FormpasienComponent = () => {
  return (
    <div className="mt-5">
      <Container>
        <div className="section-form m-0 p-5 rounded-5">
          <Row>
            <Col>
              <h3>Data Pasien</h3>
            </Col>
          </Row>
          <Form className="mt-3">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="name" placeholder="Enter your name" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                No. Telephone
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="tel"
                  placeholder="Enter your no. telephone"
                  pattern="[0-9]{1,12}" // Hanya memperbolehkan angka dan maksimal 12 digit
                  title="Enter valid phone number (ex: 082208435465)"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalDate"
            >
              <Form.Label column sm={2}>
                Date
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="date" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalAddress"
            >
              <Form.Label column sm={2}>
                Address
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Enter your address"
                />
              </Col>
            </Form.Group>
            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Type
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Mandiri"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Asuransi"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="BPJS"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Back</Button>
                <Button type="submit">Next</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default FormpasienComponent;
