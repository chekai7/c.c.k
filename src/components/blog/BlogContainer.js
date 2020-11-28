import React from "react"
import { Container, Row, Col } from "reactstrap"
import FP from "assets/img/function_programing.png"
import useReducer from "assets/img/useReducer.png"
import tokenIntr from "assets/img/Token.png"

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
            <Col md="4" sm="8">
              <h4>Functional programing 介紹</h4>
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
            </Col>
            <Col md="4" sm="8">
              <h4>React hook 介紹</h4>
              <h4 className="images-title">
                <a
                  href="https://hackmd.io/@cckai/SkFhBKSFw"
                  onclick='window.open("https://hackmd.io/@cckai/SkFhBKSFw", "myWin", "scrollbars=yes,width=400,height=650"); return false;'
                  target="_blank"
                >
                  useRucer
                </a>
              </h4>
              <img
                alt="..."
                onclick='window.open("https://hackmd.io/@cckai/SkFhBKSFw", "myWin", "scrollbars=yes,width=400,height=650"); return false;'
                className="img-rounded img-responsive"
                src={useReducer}
                height={210}
              />
            </Col>
            <Col md="4" sm="8">
              <h4>JWT and Token簡介</h4>
              <h4 className="images-title">
                <a
                  href="https://hackmd.io/@cckai/B1J8Z-Uqw"
                  onclick='window.open("https://hackmd.io/@cckai/B1J8Z-Uqw", "myWin", "scrollbars=yes,width=400,height=650"); return false;'
                  target="_blank"
                >
                  Access Token v.s. Refresh Token
                </a>
              </h4>
              <img
                alt="..."
                onclick='window.open("https://hackmd.io/@cckai/B1J8Z-Uqw", "myWin", "scrollbars=yes,width=400,height=650"); return false;'
                className="img-rounded img-responsive"
                src={tokenIntr}
                height={210}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </div>
  )
}

export default Portfolio
