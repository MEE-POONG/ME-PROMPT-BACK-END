import React, { useEffect, useState } from 'react'
import { Container, Modal, Card, Button, Form, Image, InputGroup, Row, Col, Table, Badge } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
export default function AutoComplete(props) {
    const [selected, setSelected] = useState([]);
    useEffect(() => {
        if (selected && selected[0]) {
            props.value(selected)
        }
    }, [selected])
    return (
        <>
            <Form.Group>
                <Form.Label>{props.label}</Form.Label>
                <Typeahead
                    id={props.id}
                    onChange={setSelected}
                    newSelectionPrefix={<Badge className='me-2' bg="success">New Team</Badge>}
                    allowNew
                    options={props.options}
                    placeholder={props.placeholder}
                    selected={selected}
                />
            </Form.Group>
        </>
    )
}