import React, { useEffect, useState } from 'react'
import { Dropdown, Form } from 'react-bootstrap';
export default function AutoComplete(props) {
    const [color, setColor] = useState('white');
    const [show, setShow] = useState(false);
    const [selectTeam, setSelectTeam] = useState('');
    // console.log(props.options);
    useEffect(() => {
        console.log(selectTeam);
    }, [selectTeam])
    useEffect(() => {
        console.log(show);
    }, [show])
    return (
        <>
            <Form.Group className="mb-3 position-relative" controlId="formBasicEmail" onMouseOut={() => { setShow(false) }}>
                <Form.Label>เลือกทีม</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={selectTeam} onChange={(e) => { setSelectTeam(e.target.value) }} onClick={() => { setShow(true) }} />
                <Dropdown.Menu show={show} className='w-100' onMouseOver={() => { setShow(true) }}>
                    {props.options?.map((value, index) => (
                        <Dropdown.Item key={index} onClick={() => { setShow(false); setSelectTeam(value.label) }} eventKey="2">
                            {value.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Form.Group>
        </>
    )
}