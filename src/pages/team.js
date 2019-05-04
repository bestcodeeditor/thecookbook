import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Card, CardText, CardBody, CardTitle, Button, Row } from "reactstrap"
import authors from "../util/authors"
import johnImage from "../images/author4.jpg"
import suzanImage from "../images/author2.jpg"
import { slugify } from "../util/utility"

import SEO from "../components/seo"

const TeamPage = () => (
  <Layout pageTitle="Our Chefs">
    <SEO title="Our Chefs" keywords={[`food`, `chefs`, `cooking`]} />
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={johnImage} style={{ maxWidth: "100%" }} alt="avtar" />
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
  </Layout>
)

export default TeamPage
