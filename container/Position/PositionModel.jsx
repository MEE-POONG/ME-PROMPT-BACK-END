import React, { useEffect, useState } from 'react'
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col, DropdownButton, Dropdown, Badge, ToggleButton } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import AutoComplete from '@/components/AutoComplete'
import CardLoading from '@/components/CardChange/CardLoading'
import CardError from '@/components/CardChange/CardError'
import AutoCompleteTwo from '@/components/AutoCompleteTwo'
import AutoCompleteThree from '@/components/AutoCompleteThree'
export default function PositionModel() {
    const [{ data: positionData, loading, error }, getPosition] = useAxios({ url: '/api/position' })
    const [{ data: positionPost, error: errorMessage, loading: positionLoading }, executePosition] = useAxios({ url: '/api/position', method: 'POST' }, { manual: true });

    const [teamSelect, setTeamSelect] = useState('');
    const [positionSelect, setPositionSelect] = useState('');
    const [checkValue, setCheckValue] = useState(true);

    const [showCheck, setShowCheck] = useState(false);
    const handleClose = () => setShowCheck(false);
    const handleShow = () => setShowCheck(true);
    const teams = positionData
        .map(position => position.team)
        .filter((team, index, self) => self.indexOf(team) === index)
        .reduce((teams, team) => [...teams, { label: team }], []);

    const clickTeam = value => {
        setTeamSelect(value[0].label);
    };

    function handlePostData() {
        if (teamSelect === '' || positionSelect === '') {
            setCheckValue(false)
        } else {
            setCheckValue(true)
        }
        console.log("checkValue ", checkValue);
        // executePosition({
        //     data: {
        //         team: teamSelect,
        //         position: positionSelect,
        //     }
        // }).then(() => {
        //     Promise.all([
        //         setTeamSelect(''),
        //         setPositionSelect(''),
        //     ]).then(() => {
        //         handleClose()
        //     })
        // })
    }

    if (loading || positionLoading) return <Modal show={showCheck} onHide={handleClose} centered size='lg'><CardLoading /></Modal >
    if (error || errorMessage) return <Modal show={showCheck} onHide={handleClose} centered size='lg'><CardError /></Modal>

    return (
        <>
            <Button bsPrefix="create" className={showCheck ? 'icon active d-flex' : 'icon d-flex'} onClick={handleShow}>
                <FaPlus />{" "}เพิ่มหน้าที่งาน
            </Button>
            <Modal show={showCheck} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>ทีม และ หน้าที่งาน</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row className="mb-3">

                        <Col md='6'>
                            {/* <AutoComplete options={teams} id="position-team" label="เลือกทีม" placeholder="ระบุทีม / แผนกงาน" value={clickTeam} checkValue={checkValue} /> */}
                            {/* <AutoCompleteTwo id="position-team" label="เลือกทีม" placeholder="ระบุทีม / แผนกงาน" value={clickTeam} checkValue={checkValue} options={teams} /> */}
                            <AutoCompleteThree id="position-team" label="เลือกทีม" placeholder="ระบุทีม / แผนกงาน" value={clickTeam} checkValue={checkValue} options={teams} />
                        </Col>
                        <Col md='6'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>หน้าที่งาน / ตำแหน่งงาน</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน" onChange={(e) => { setPositionSelect(e.target.value) }} value={positionSelect} autoComplete="off" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsPrefix="cancel" className='my-0' onClick={handleClose}>
                        ยกเลิก
                    </Button>
                    <Button bsPrefix="succeed" className='my-0' onClick={handlePostData}>
                        ยืนยันการเพิ่ม
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}