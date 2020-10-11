import React from "react"
import { Button, Container, Row, Col } from "reactstrap"
import FP from "assets/img/function_programing.png"

import IndexNavbar from "components/Navbars/IndexNavbar.js"
import IndexHeader from "components/Headers/IndexHeader.js"
import DemoFooter from "components/Footers/DemoFooter.js"

const Portfolio = () => {
  return (
    <div>
      <IndexNavbar />
      <IndexHeader />
      <div id="images">
        <Container>
          <div className="title">
            <h3>部落格</h3>
          </div>
          <Row>
            <Col md="3" sm="6">
              <h4 className="images-title">
                <a
                  href="https://hackmd.io/@cckai/Sk1sUpf8v"
                  onclick='window.open("https://hackmd.io/@cckai/Sk1sUpf8v", "myWin", "scrollbars=yes,width=400,height=650"); return false;'
                  target="_blank"
                >
                  functional programing
                </a>
              </h4>
              <img
                alt="..."
                onclick="window.open('http://tw.yahoo.com');"
                className="img-rounded img-responsive"
                src={FP}
                height={210}
              />
              <h4>Functional programing 介紹</h4>
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </div>
  )
}

export default Portfolio
