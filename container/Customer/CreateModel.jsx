import React, { useEffect, useState } from 'react'
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'

export default function CreateModel() {
    const [showCheck, setShowCheck] = useState(false);
    const handleClose = () => setShowCheck(false);
    const handleShow = () => setShowCheck(true);
    return (
        <>
            <Button bsPrefix="create" className={showCheck ? 'icon active d-flex' : 'icon d-flex'} onClick={handleShow}>
                <FaPlus />{" "}เพิ่มพนักงาน
            </Button>
            <Modal show={showCheck} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>เพิ่มสมาชิกบริษัท</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Col lg='12'>
                            <Modal.Title className='mb-2'>ข้อมูลส่วนตัว</Modal.Title>
                        </Col>
                        <Col lg='4'>
                            <Form.Group controlId="formFile" >
                                <Form.Label className='d-block mt-1 mb-0'>โปรไฟล์</Form.Label>
                                <Image className="mb-2" src={'././images/img_avatar3.png'} alt="product_img" fluid rounded />
                                <Form.Control type="file" accept="image/*" />
                            </Form.Group>
                        </Col>
                        <Col lg='8'>
                            <Form.Group controlId="FirstName">
                                <Form.Label className='mt-1 mb-0'>FirstName</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="FirstName"
                                    defaultValue="Mark"
                                />
                            </Form.Group>
                            <Form.Group controlId="LastName">
                                <Form.Label className='mt-1 mb-0'>LastName</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="LastName"
                                    defaultValue="Mark"
                                />
                            </Form.Group>
                            <Form.Group controlId="Username">
                                <Form.Label className='mt-1 mb-0'>Username</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Username"
                                    defaultValue="Mark"
                                />
                            </Form.Group>
                            <InputGroup className="my-3 position justify-content-center">
                                <InputGroup.Text id="inputGroup-sizing-sm">ทีม</InputGroup.Text>
                                <DropdownButton
                                    variant="outline-secondary"
                                    title="-เลือกทีม-"
                                    id="input-group-dropdown-1"
                                >
                                    <Dropdown.Item href="#">Developer</Dropdown.Item>
                                    <Dropdown.Item href="#">Gaphic Design</Dropdown.Item>
                                    <Dropdown.Item href="#">Marketing</Dropdown.Item>
                                </DropdownButton>
                                <InputGroup.Text id="inputGroup-sizing-sm">ตำแหน่งงาน</InputGroup.Text>
                                <DropdownButton
                                    variant="outline-secondary"
                                    title="-เลือกหน้าที่งาน-"
                                    id="input-group-dropdown-1"
                                >
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </DropdownButton>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Modal.Title className='mb-2'>ที่อยู่</Modal.Title>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className='mt-1 mb-0'>address</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="FirstName"
                                defaultValue="Mark"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className='mt-1 mb-0'>city</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="LastName"
                                defaultValue="Mark"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className='mt-1 mb-0'>postal Code</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                            />
                        </Form.Group>
                    </Row>
                    <Modal.Title className='mb-2'>โซเชียล</Modal.Title>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className='mt-1 mb-0'>facebook</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="FirstName"
                                defaultValue="Mark"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className='mt-1 mb-0'>Line</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="LastName"
                                defaultValue="Mark"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label className='mt-1 mb-0'>Intragarm</Form.Label>
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