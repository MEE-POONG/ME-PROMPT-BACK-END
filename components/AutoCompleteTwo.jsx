import React, { useEffect, useState } from 'react'
import { Dropdown, Form } from 'react-bootstrap';
export default function AutoCompleteTwo(props) {
    const [show, setShow] = useState(false);
    const [selected, setselected] = useState('');
    useEffect(() => {
        console.log("selected : ", selected);
        if (selected !== '') {
            props.value(selected)
        }
    }, [selected])
    return (
        <>
            <Form.Group className="mb-3 position-relative" controlId="formBasicEmail" onMouseOut={() => { setShow(false) }}>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control type="email" placeholder={props.placeholder} value={selected} onChange={(e) => { setselected(e.target.value) }} onClick={() => { setShow(true) }} />
                <Dropdown.Menu show={show} className='w-100' onMouseOver={() => { setShow(true) }}>
                    {props.options?.map((value, index) => (
                        <Dropdown.Item key={index} onClick={() => { setShow(false); setselected(value.label) }} eventKey="2">
                            {value.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Form.Group>
        </>
    )
}