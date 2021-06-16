import React from 'react';
import Tabs from "../components/Tabs";
import Accordions from '../components/Accordion/Accordions';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import parse from 'html-react-parser'
const data = require('../assets/data/data.json')

const ExerciseTwo = () => {
  return (
    <div>
      <Tabs
        content1={parse(data[0]["content"])}
        content2={parse(data[1]["content"])}
        content3={parse(data[2]["content"])}
        content4={parse(data[3]["content"])}
      />
      <Accordions
        content1={parse(data[0]["content"])}
        content2={parse(data[1]["content"])}
        content3={parse(data[2]["content"])}
        content4={parse(data[3]["content"])}
      />
      <div className="button__container">
        <Link to="/">
          <Button color="info" className="button">Back</Button>
        </Link>
      </div>
    </div>
  );
}

export default ExerciseTwo;
