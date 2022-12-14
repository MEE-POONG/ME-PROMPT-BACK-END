import React, { useEffect, useState } from 'react'
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col, DropdownButton, Dropdown, Badge } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import { positionData } from '../../pages/data'
export default function PositionModel() {
    const [showCheck, setShowCheck] = useState(false);
    const handleClose = () => setShowCheck(false);
    const handleShow = () => setShowCheck(true);
    const [searchData, setSearchData] = useState('');
    useEffect(() => {
        console.log(searchData);
    }, [searchData])

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
                            <Form.Group controlId="validationCustom01" className='position-relative w-100'>
                                <Form.Label className='mt-1 mb-0'>ทีม</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="ทีม"
                                    defaultValue="Mark"
                                    onChange={(e) => {
                                        setSearchData(e.target.value);
                                    }}
                                ></Form.Control>
                                <Dropdown.Menu show={searchData !== ''} className='w-100'>
                                    {positionData ?
                                        positionData.map((e, index) => (
                                            <Dropdown.Item key={index} className='d-flex'>
                                                <span
                                                // onClick={() => {
                                                //     setAllianceAdd({ ...allianceAdd, adviserID: e._id, adviserView: e.usernameAG, usernameAG: e.usernameAG });
                                                // }}
                                                >
                                                    {e.team}
                                                </span>
                                                <Badge className='ms-auto' bg="danger">New</Badge>
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