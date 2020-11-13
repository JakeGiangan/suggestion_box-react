import React from 'react';
import SuggestionTable from './components/Table';
import NewTopic from './components/NewTopic';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const items = [
    {
      index: 0,
      title: "What is React?",
      content: "React is a front end JS Framework",
      created_at: "2020-11-11T15:07:33Z"
    },
    {
      index: 1,
      title: "Why use React?",
      content: "React is a favored JS Library among engineers",
      created_at: "2020-11-10T15:20:54Z"
    },
    {
      index: 2,
      title: "How to use React?",
      content: "You use React by creating components",
      created_at: "2020-11-05T17:53:55Z"
    },
    {
      index: 3,
      title: "How to do I find the perfect routine?",
      content: "Its been in my mind lately, and I want your opinion about the perfect routine",
      created_at: "2020-11-09T20:04:53Z"
    },
    {
      index: 4,
      title: "Chu-Chu Yeah!?",
      content: "Please me!",
      created_at: "2020-11-05T10:31:13Z"
    },
    {
      index: 5,
      title: "KDA Akali All out skin better than normal KDA Skin?",
      content: "IMO she looks hot on both skins but IDK man I can only afford one of the skins",
      created_at: "2020-11-04T18:34:17Z"
    }
  ];

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="text-center"><i className="fa fa-bullhorn fa-flip-horizontal"></i> Suggestion Box <i className="fa fa-bullhorn"></i></h3>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col>
          <NewTopic currentArray={items} />
        </Col>
      </Row>

      <hr />

      <Row>
        <Col>
          <SuggestionTable items={items} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;