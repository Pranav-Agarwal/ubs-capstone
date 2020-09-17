
import React from "react";
import { MDBContainer, MDBInput } from "mdbreact";
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

class FormComp extends React.Component {
state = {
  radio: 2
}

onClick = (nr) => () => {
  this.setState({
    radio: nr
  });
}

render() {
  return (
    <Form>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        New Order
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Firm"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Customer"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Stock Details
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Apple"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Amazon"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Tesla"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
      <div style={ { padding: 10 } }>
        <h2 style={ { marginTop: 10 } }>Action</h2>
        <br/>
      </div>
      <ToggleButton value="left" aria-label="left aligned">
        Buy
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        Sell
      </ToggleButton>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>
</Form>


    );
  }
}

export default FormComp;