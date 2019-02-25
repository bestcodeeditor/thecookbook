import React from "react"
import {
  Badge,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Form,
  FormGroup,
  Input,
} from "reactstrap"
import { graphql } from "gatsby"

const Sidebar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input type="email" name="email" placeholder="your email" />
          </FormGroup>
          <button className="btn btn-outline-success text-uppercase">
            Subscribe
          </button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
        <img
          src="https://via.placeholder.com/320x300"
          alt="advert"
          style={{ width: "100%" }}
        />
      </CardBody>
    </Card>
  </div>
)

export default Sidebar
