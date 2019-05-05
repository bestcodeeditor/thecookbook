import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Card, CardText, CardBody, CardTitle, Button, Row } from "reactstrap"
import authors from "../util/authors"
import johnImage from "../images/author4.jpg"
import author1Image from "../images/author1.jpg"
import author2Image from "../images/author3.jpg"
import suzanImage from "../images/author2.jpg"
import kattyImage from "../images/author5.jpg"
import binitaImage from "../images/author6.jpg"

import { slugify } from "../util/utility"

import SEO from "../components/seo"

const TeamPage = () => (
  <Layout pageTitle="Our Chefs">
    <SEO title="Our Chefs" keywords={[`food`, `chefs`, `cooking`]} />
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={binitaImage} style={{ maxWidth: "100%" }} alt="avtar" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[5].name} </CardTitle>
            <CardText>{authors[5].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[5].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={johnImage} style={{ maxWidth: "100%" }} alt="avtar" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[3].name} </CardTitle>
            <CardText>{authors[3].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[3].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>

    <Row className="mb-4">
      <div className="col-md-3">
        <img src={suzanImage} style={{ maxWidth: "100%" }} alt="avtar" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[1].name} </CardTitle>
            <CardText>{authors[1].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[1].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>

    <Row className="mb-4">
      <div className="col-md-3">
        <img src={author1Image} style={{ maxWidth: "100%" }} alt="avtar" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[0].name} </CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[0].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={author2Image} style={{ maxWidth: "100%" }} alt="avtar" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[2].name} </CardTitle>
            <CardText>{authors[2].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[2].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={kattyImage} style={{ maxWidth: "100%" }} alt="avtar" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[4].name} </CardTitle>
            <CardText>{authors[4].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[4].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
