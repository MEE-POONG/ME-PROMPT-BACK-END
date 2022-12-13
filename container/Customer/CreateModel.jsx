import React, { useEffect, useState } from 'react'
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'

export default function CreateModel() {
    const [showCheck, setShowCheck] = useState(false);
    const handleClose = () => setShowCheck(false);
    const handleShow = () => setShowCheck(true);
    return (
        <>
            <Button bsPrefix={showCheck ? 'icon create active' : 'icon create'} onClick={handleShow}>
                <FaPlus />
            </Button>

            <Modal show={showCheck} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>เพิ่มสมาชิกบริษัท</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Col lg='12'>
                            <Modal.Title>ข้อมูลส่วนตัว</Modal.Title>
                        </Col>
                        <Col lg='4'>
                            <Form.Group className='mt-4' controlId="formFile" >
                                <Form.Label className='d-block'>โปรไฟล์</Form.Label>
                                <Image className="mb-2" src={'./images/img_avatar3.png'} alt="product_img" fluid rounded />
                                <Form.Control type="file" accept="image/*" />
                            </Form.Group>
                        </Col>
                        <Col lg='8'>
                            <Form.Group className='mt-4' controlId="FirstName">
                                <Form.Label>FirstName</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="FirstName"
                                    defaultValue="Mark"
                                />
                            </Form.Group>
                            <Form.Group className='mt-4' controlId="LastName">
                                <Form.Label>LastName</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="LastName"
                                    defaultValue="Mark"
                                />
                            </Form.Group>
                            <Form.Group className='mt-4' controlId="Username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Username"
                                    defaultValue="Mark"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Modal.Title className='mt-4'>ที่อยู่</Modal.Title>
                    <Row className="mb-3">
                        <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>address</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="FirstName"
                                defaultValue="Mark"
                            />
                        </Form.Group>
                        <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>city</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="LastName"
                                defaultValue="Mark"
                            />
                        </Form.Group>
                        <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>postal Code</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                            />
                        </Form.Group>
                    </Row>
                    <Modal.Title className='mt-4'>โซเชียล</Modal.Title>
                    <Row className="mb-3">
                        <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>facebook</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="FirstName"
                                defaultValue="Mark"
                            />
                        </Form.Group>
                        <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Line</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="LastName"
                                defaultValue="Mark"
                            />
                        </Form.Group>
                        <Form.Group className='mt-4' as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Intragarm</Form.Label>
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
                    <Button onClick={handleShow}>
                        <FaPlus />
                    </Button>
                    <Button bsPrefix="cancel" onClick={handleClose}>
                        Close
                    </Button>
                    <Button bsPrefix="succeed" onClick={handleClose}>
                        ยืนยันการเพิ่ม
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}