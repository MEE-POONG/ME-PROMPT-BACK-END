import React, { useEffect, useState } from 'react'
import { Dropdown, Form } from 'react-bootstrap';
export default function AutoComplete(props) {
    const [show, setShow] = useState(false);
    const [selectList, setselectList] = useState('');
    const [matchSearch, setMatchSearch] = useState([])
    useEffect(() => {
        setMatchSearch(autocomplete(selectList, props.options))
    }, [selectList])

    function autocomplete(keywork, dictionary) {
        console.log("dictionary : ", keywork, dictionary);
        const keyworkLength = keywork.length;
        const matches = [];

        for (const entry of dictionary) {
            if (entry.position.substring(0, keyworkLength) === keywork) {
                matches.push(entry);
            }
        }

        // return matches;
    }

    return (
        <>
            <Form.Group className="mb-3 position-relative" controlId="formBasicEmail" onMouseOut={() => { setShow(false) }}>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control type="email" placeholder={props.placeholder} value={selectList} onChange={(e) => { setselectList(e.target.value) }} onClick={() => { setShow(true) }} autoComplete="off" />
                <Dropdown.Menu show={show} className='w-100' onMouseOver={() => { setShow(true) }}>
                    {props.options?.map((value, index) => (
                        <Dropdown.Item key={index} onClick={() => { setShow(false); setselectList(value.label) }} eventKey="2">
                            {value.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Form.Group>
        </>
    )
}