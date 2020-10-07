import React from "react"
import { Alert, Button, Container, Row, Col } from "reactstrap"
import FP from "assets/img/function_programing.png"

import IndexNavbar from "components/Navbars/IndexNavbar.js"
import IndexHeader from "components/Headers/IndexHeader.js"

import { Pack, Cover, Back, Text, CardContainer } from "./Pack.js"

const AboutMe = () => {
  return (
    <div>
      <div id="images">
        <Container>
          <h1 className="text-success">About me.</h1>

          <br />
          <h6>
            A passionate developer start writing a diary to record full-stack
            knowledge and skills.
          </h6>
          <Row>
            <Col md="3" sm="6">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src="https://images.unsplash.com/photo-1582826775597-9715fa85ce77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </Col>
            <Col md="3" sm="6">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src="https://images.unsplash.com/photo-1593007187957-ecc077ee2872?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </Col>
            <Col md="3" sm="6">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </Col>
            <Col md="3" sm="6">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src="https://images.unsplash.com/photo-1537992154322-247019282112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </Col>
          </Row>
        </Container>
        <Container className="pack">
          <h1 className="text-success">Skill.</h1>

          <br />
          <h6>前端&&後端&&工具</h6>
          <Row>
            <CardContainer>
              <Cover>
                <Text> React.js </Text>
                <Text> Scss </Text>
              </Cover>
              <Back>前端</Back>
            </CardContainer>

            <CardContainer>
              <Cover>
                <Text> Node.js </Text>
                <Text> Express </Text>
                <Text> MySQL </Text>
                <Text> MongoDB </Text>
              </Cover>
              <Back>後端</Back>
            </CardContainer>

            <CardContainer>
              <Cover>
                <Text> JenkinsCI </Text>
                <Text> Git </Text>
                <Text> Heroku </Text>
              </Cover>
              <Back>工具</Back>
            </CardContainer>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default AboutMe
