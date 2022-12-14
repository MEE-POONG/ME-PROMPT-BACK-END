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
    const positionList = positionData
        .map(position => position.position)
        .filter((position, index, self) => self.indexOf(position) === index)
        .reduce((teams, position) => [...teams, { id: position, label: position }], []);
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
                            <AutoComplete options={teams} label="เลือกทีม" />
                        </Col>
                        <Col md='6'>
                            <AutoComplete options={positionList} label="หน้าที่งาน" />
                        </Col>
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