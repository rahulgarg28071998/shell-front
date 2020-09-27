/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import logo from "assets/img/react-logo.png";

// reactstrap components
import {
  Card,
  CardDeck,
  CardHeader,
  CardTitle,
  CardBody,
  Col,
  Row,
} from "reactstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
    };
  }
  setBgChartData = (name) => {
    this.setState({
      bigChartData: name,
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row lg="6" className="justify-content-lg-center">
            <Col lg="12">
              <Card className="mx-auto">
                <CardHeader>
                  <center>
                    <img src={logo} />{" "}
                  </center>
                </CardHeader>
                <hr />
                <CardBody className="text-center">
                  Easify.AI provides a consolidated suite of deep-learning
                  powered Natural language processing tools that helps
                  democratize and understand complex articles and texts.
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row lg="6" className="justify-content-lg-center">
            <Col lg="12">
              <CardDeck lg="12">
                <Card className="mx-2">
                  <CardHeader>
                    <CardTitle tag="h3">
                      Intelligent Document Understanding
                    </CardTitle>
                  </CardHeader>
                  <hr />
                  <CardBody className="">
                    <ul>
                      <li style={{ color: "#525f7f" }}>
                        Upload any Document having Legal Texts/Insurance
                        Activities/Research Papers.
                      </li>
                      <li style={{ color: "#525f7f" }}>
                        Google Cloud Document API extracts text and tables from
                        document
                      </li>
                      <li style={{ color: "#525f7f" }}>
                        GPT-3 enables users in natural language and get
                        responses
                      </li>
                    </ul>
                  </CardBody>
                </Card>
                <Card className="mx-2">
                  <CardHeader>
                    <CardTitle tag="h3">Custom Responses</CardTitle>
                  </CardHeader>
                  <hr />
                  <CardBody className="">
                    Easify.AI helps in generating custom responses to particular
                    documents.
                  </CardBody>
                </Card>
                <Card className="mx-2">
                  <CardHeader>
                    <CardTitle tag="h3" style={{ marginBottom: "1.9em" }}>
                      Easify.AI Chrome Extension
                    </CardTitle>
                  </CardHeader>
                  <hr />
                  <CardBody className="">
                    Legal documents, Insurance documents, High level Study
                    texts, research papers are often highly convoluted and full
                    of uncommon difficult to understand, domain specific
                    vocabulary. Sometimes, people can't understand the context
                    of the information provided. We help easify this for you,
                    enabling people without the domain knowledge or exposure to
                    understand the context, clasuses and make informed decisions
                    and to help them avoid scams or time wasted to look for
                    relevant context online!
                  </CardBody>
                </Card>
              </CardDeck>
            </Col>
          </Row>
          <Row lg="6" className="justify-content-lg-center mt-4">
            <Col lg="12">
              <Card className="mx-auto">
                <CardHeader className="justify-content-center">
                  <CardTitle tag="h3" className="text-center">
                    Creators of Easify.AI
                  </CardTitle>
                </CardHeader>
                <hr />
                <CardBody className="text-center">
                  Sanskar Jethi <br />
                  Pulkit Midha
                  <br />
                  Rahul Garg
                  <br />
                  Shivay Lamba
                  <br />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Home;
