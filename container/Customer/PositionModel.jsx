import React, { useEffect, useState } from 'react'
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import { positionData } from '../../pages/data'
export default function PositionModel() {
    const [showCheck, setShowCheck] = useState(false);
    const handleClose = () => setShowCheck(false);
    const handleShow = () => setShowCheck(true);
    const [searchTeam, setSearchTeam] = useState('')
    console.log(searchTeam);
    const [singleSelections, setSingleSelections] = useState([]);
    const [multiSelections, setMultiSelections] = useState([]);
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
                        <InputGroup>
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title={searchTeam !== "" ? searchTeam : "เลือกผู้แนะนำ"}
                                id="input-group-dropdown-1"
                                disabled={searchTeam === ""}
                            >
                                {positionData.length ? (
                                    positionData.map((e, index) => (
                                        <Dropdown.Item
                                            key={index}
                                        // onClick={() => {
                                        //     setAllianceAdd({ ...allianceAdd, adviserID: e._id, adviserView: e.usernameAG, usernameAG: e.usernameAG });
                                        // }}
                                        >
                                            {e.team}
                                        </Dropdown.Item>
                                    ))) : (
                                    <Dropdown.Item disabled>ไม่พบข้อมูล</Dropdown.Item>
                                )}
                            </DropdownButton>
                            <Form.Control
                                placeholder="ค้นหายูสแนะนำ"
                                aria-label="ระบุยูสผู้แนะนำ"
                                aria-describedby="basic-addon2"
                                // disabled={allianceSearch.webSearch === ""}
                                onChange={(e) => {
                                    setSearchTeam(e.target.value);
                                }}
                            />
                        </InputGroup>
                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                            <Form.Label className='mt-1 mb-0'>ทีม</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="LastName"
                                defaultValue="Mark"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="5" controlId="validationCustom01">
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