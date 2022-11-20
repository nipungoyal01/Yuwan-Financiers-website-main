import React from 'react'
import { Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
/**
* @author
* @function AccordionCards
**/

const AccordionCards = (props) => {
    return (
        <>
            <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>{props.title}</Accordion.Header>
            <Accordion.Body>
            {props.para}
            </Accordion.Body>
        </Accordion.Item>
        </>
    )
}


export default AccordionCards