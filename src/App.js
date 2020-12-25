import React, { Component } from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Form, Input, Button } from "antd";

class App extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlesubmit = (e) => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <Form>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              { type: "email", message: "The input is not valid E-mail!" },
              { required: true, message: "Please input your E-mail!" }
            ]}
          >
            <Input
              autocomplete="off"
              name="email"
              onChange={this.handleChange}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input Password!" }]}
          >
            <Input.Password
              autocomplete="off"
              name="password"
              onChange={this.handleChange}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick={this.handlesubmit}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default App;
