import React from 'react'
import {
  Container,
  Button,
  Row,
  Col
} from "reactstrap";
import Card from "../components/Card";
import Banner from '../components/Banner';
import ImageCard from '../assets/images/400x300.png';
import { Link } from 'react-router-dom';

const ExerciseOne = () => {
  return (
    <React.Fragment>
      <Banner
        title="Hello Developer"
        content="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form"
      />

      <Container className="categories">
        <Row xs="1" md="3">
          <Col >
            <Card
              imageUrl={ImageCard}
              content="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
            />
          </Col>
          <Col>
            <Card
              imageUrl={ImageCard}
              content=" form of a document or a typeface without relying on meaningful content. "
            />
          </Col>
          <Col>
            <Card
              imageUrl={ImageCard}
              content=" Lorem ipsum is a placeholder text commonly used to document or a typeface without relying on meaningful content. "
            />
          </Col>
        
        </Row>
      </Container>

      {/* <div className="button__container">
        <Link to="/">
          <Button color="info" className="button">Back</Button>
        </Link>
      </div> */}
    </React.Fragment>
  );
}

export default ExerciseOne;