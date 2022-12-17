import React, { useEffect, useState } from 'react'
import { Container, Modal, Card, Button, Form, Image, InputGroup, Row, Col, Table, Badge } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
export default function AutoComplete(props) {
    const [selected, setSelected] = useState([]);
    useEffect(() => {
        console.log("selected : ", selected);
        if (selected && selected[0]) {
            props.value(selected)
        }
    }, [selected])
    function filterData(data, selected) {
        return data.filter(item => item.team.includes(selected));
      }
    
      function handleSearchChange(event) {
        setSelected(event.target.value);
      }
    
    return (
        <>
            <Form.Group>
                <Form.Label>{props.label}</Form.Label>
                <Typeahead
                    id={props.id}
                    onChange={setSelected}
                    newSelectionPrefix={<Badge className='me-2' bg="success">New Team</Badge>}
                    allowNew
                    isInvalid={!selected[0] && props.checkValue === false}
                    isValid={selected.length > 1 && props.checkValue === true}
                    options={props.options}
                    placeholder={props.placeholder}
                    selected={selected}
                />
            </Form.Group>
            
        </>
    )
}

