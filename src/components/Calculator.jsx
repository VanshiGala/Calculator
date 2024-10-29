import React, { useState } from "react";
import { Button, Col, Row, Container } from "reactstrap";

function Calculator() {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput(input + value);
  };

  const Result = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center  p-2 bg-gray-500 mt-5 ">
      <Container className="justify-content-center text-center ">
        <Row className="justify-content-center align-items-center">
          <Col className="mx-auto p-3">
            <input type="text" value={input} readOnly />
          </Col>
        </Row>
        <table className="w-full grid grid-cols-4 gap-4 mx-auto max-w-full h-full">
          <tbody className="lg grid grid-cols-4 gap-4 w-full">
            <tr>
              <td>
                <Button onClick={() => handleInput("1")}>1</Button>
              </td>
              <td>
                <Button onClick={() => handleInput("2")}>2</Button>
              </td>
              <td>
                <Button onClick={() => handleInput("3")}>3</Button>
              </td>
              <td>
                <Button onClick={clearInput}>A</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button onClick={() => handleInput("4")}>4</Button>
              </td>
              <td>
                <Button onClick={() => handleInput("5")}>5</Button>
              </td>
              <td>
                <Button onClick={() => handleInput("6")}>6</Button>
              </td>
              <td>
                <Button onClick={() => handleInput("-")}>-</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button onClick={() => handleInput("7")}>7</Button>
              </td>
              <td>
                <Button onClick={() => handleInput("8")}>8</Button>
              </td>
              <td>
                <Button onClick={() => handleInput("9")}>9</Button>
              </td>
              <td>
                <Button onClick={() => handleInput("/")}>/</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button onClick={() => handleInput("0")}>0</Button>
              </td>
              <td>
                <Button onClick={() => handleInput("")}>.</Button>
              </td>
              <td>
                <Button onClick={Result}>=</Button>
              </td>
              <td>
                <Button onClick={() => handleInput("+")}>+</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
}
export default Calculator;
