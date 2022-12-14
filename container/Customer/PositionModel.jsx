import React, { useEffect, useState } from 'react'
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col, DropdownButton, Dropdown, Badge, ToggleButton } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import { positionData } from '../../pages/data'
import { Typeahead } from 'react-bootstrap-typeahead'
import AutoComplete from '@/components/AutoComplete'
export default function PositionModel() {
    const [showCheck, setShowCheck] = useState(false);
    const handleClose = () => setShowCheck(false);
    const handleShow = () => setShowCheck(true);
    const teams = positionData
        .map(position => position.team)
        .filter((team, index, self) => self.indexOf(team) === index)
        .reduce((teams, team) => [...teams, { id: team, label: team }], []);
    // useEffect(() => {
    //     console.log(teamDT);
    // }, [teamDT])
    // autocomplete(document.getElementById("myInput"), countries);
    return (
        <>
            <Button bsPrefix={showCheck ? 'icon edit active d-flex' : 'icon edit d-flex'} onClick={handleShow}>
                <FaPlus />{" "}เพิ่มหน้าที่งาน
            </Button>
            <Modal show={showCheck} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>ทีม และ หน้าที่งาน</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Col md='6'>
                            {/* <div
                                // When the div is clicked, set the background color to dark
                                onClick={() => setColor('dark')}
                                // When the mouse leaves the div, set the background color to gold
                                onMouseOut={() => setColor('gold')}
                                style={{ backgroundColor: color }}
                            >
                                Click me to change the background color!
                            </div>
                            <div className="autocomplete w-100" onClick={() => { }}>
                                <input id="myInput" type="text" name="myCountry" placeholder="Country" />
                                <div id="myInputautocomplete-list" className="autocomplete-items">
                                    <div>
                                        <strong>A</strong>fghanistan
                                        <input type="hidden" value="Afghanistan" />
                                    </div>
                                </div>
                            </div> */}
                            <AutoComplete options={teams} />
                            <Form.Group controlId="validationCustom01" className='position-relative w-100'>
                                <Form.Label className='mt-1 mb-0'>ทีม</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="ทีม"
                                    defaultValue="Mark"
                                    onChange={(e) => { setTeamDT(e.target.value) }}

                                ></Form.Control>
                                <Dropdown.Menu className={'show w-100'} onHide={false}>
                                    {positionData ?
                                        positionData.map((e, index) => (
                                            <Dropdown.Item key={index} className='d-flex' onClick={() => { setTeamDT(e.tame) }}>
                                                <span>
                                                    {e.team}
                                                </span>
                                            </Dropdown.Item>
                                        ))
                                        : null}
                                </Dropdown.Menu>
                            </Form.Group>
                        </Col>
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label className='mt-1 mb-0'>หน้าที่งาน</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                            />
                        </Form.Group>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsPrefix="cancel" onClick={handleClose}>
                        ยกเลิก
                    </Button>
                    <Button bsPrefix="succeed" onClick={handleClose}>
                        ยืนยันการเพิ่ม
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}