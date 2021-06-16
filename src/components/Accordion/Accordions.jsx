import React from 'react';
import { Accordion } from "./Accordion";

const Accordions = (props) => {
  return (
    <div className="accordion">
      <Accordion open={0}>
        <Accordion.Item>
          <Accordion.Header>Section 1</Accordion.Header>
          <Accordion.Body>
            {props.content1}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Header>Section 2</Accordion.Header>
          <Accordion.Body>
            {props.content2}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Header>Section 3</Accordion.Header>
          <Accordion.Body>
            {props.content3}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Header>Section 4</Accordion.Header>
          <Accordion.Body>
            {props.content4}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>


  );
}

export default Accordions;
