import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row, Stack } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function App() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [msg, setMsg] = useState(
        <>
            <h6>Enter Height and Weight </h6>
            <h6>
                {" "}
                Then press{" "}
                <span
                    style={{
                        color: "white",
                        backgroundColor: "blue",
                        borderRadius: "4px",
                        padding: "4px 6px",
                    }}
                >
                    {" "}
                    Calculate
                </span>
            </h6>
        </>,
    );
    const handleBmi = () => {
        // BMI:
        // Underweight: BMI < 18.5
        // Normal weight: 18.5 <= BMI < 24.9
        // Overweight: 25 <= BMI < 29.9
        // Obese: BMI >= 30
        if (weight == "" || height == "") {
            alert("fill the form first");
            return;
        }
        let bmi = Number((weight / height ** 2).toFixed(2));
        if (bmi < 18.5) {
            setMsg(
                <>
                    <h6>BMI = {bmi} </h6> <p>You are Underweight</p>
                </>,
            );
        } else if (bmi < 25) {
            setMsg(
                <>
                    <h6>BMI = {bmi} </h6> <p>You have Normal Weight</p>
                </>,
            );
        } else if (bmi < 30) {
            setMsg(
                <>
                    <h6>BMI = {bmi} </h6> <p>You are Overweight</p>
                </>,
            );
        } else {
            setMsg(
                <>
                    <h6>BMI = {bmi} </h6> <p>You are Obese</p>
                </>,
            );
        }
    };

    return (
        <>
            <h1 style={{ textAlign: "center", padding: "39px" }}>
                {" "}
                Body Mass Index Calculator
            </h1>
            <Row style={{ margin: "0", padding: "39px" }}>
                <Col></Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                type="number"
                                placeholder="Enter your Weight in Kg"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Height</Form.Label>
                            <Form.Control
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                type="number"
                                placeholder="Enter your Height in meter"
                            />
                        </Form.Group>
                        <Stack>
                            <Button variant="primary" onClick={handleBmi}>
                                Calculate
                            </Button>
                        </Stack>

                        <div
                            style={{
                                marginTop: "24px",
                                padding: "14px 18px",
                                borderRadius: "10px",
                                backgroundColor: msg ? "#e8f1ff" : "#f8f9fa",
                                color: "#0d47a1",
                                fontWeight: "600",
                                textAlign: "center",
                                minHeight: "24px",
                            }}
                        >
                            {msg}
                        </div>
                        {/* <Alert variant="primary">Fill the Details First</Alert> */}
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </>
    );
}

export default App;
