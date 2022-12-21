import React, { useEffect, useState } from 'react'
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col, DropdownButton, Dropdown, Badge, ToggleButton } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import AutoComplete from '@/components/AutoComplete'
import CardLoading from '@/components/CardChange/CardLoading'
import CardError from '@/components/CardChange/CardError'
export default function PositionEditModel(props) {
    const [{ data: position, loading, error }, getPosition] = useAxios({ url: '/api/position/team' })
    const [{ loading: updatePositionLoading, error: updatePositionError }, executePositionPut] = useAxios({}, { manual: true })
    const [{ data: positionPut, loading: deletePositionLoading, error: deletePositionError }, executePositionDelete] = useAxios({}, { manual: true })

    const [teamSelect, setTeamSelect] = useState(props?.value?.team);
    const [positionSelect, setPositionSelect] = useState(props?.value?.position);
    const [checkValue, setCheckValue] = useState(true);

    const [showCheck, setShowCheck] = useState(false);
    const handleClose = () => { setShowCheck(false), setCheckValue(true) };
    const handleShow = () => setShowCheck(true);

    const teams = position?.reduce((acc, item) => {
        if (!acc.some(i => i.team === item.team)) {
            acc.push(item);
        }
        return acc;
    }, []);

    const clickTeam = value => {
        setTeamSelect(value);
    };
    const handlePutData = () => {
        setCheckValue(false);
        if (teamSelect !== '' && positionSelect !== '') {
            executePositionPut({
                url: '/api/position/' + props?.value?.id,
                method: 'PUT',
                data: {
                    team: teamSelect,
                    position: positionSelect,
                }
            }).then(() => {
                Promise.all([
                    setTeamSelect(''),
                    setPositionSelect(''),
                    props.getData(),
                ]).then(() => {
                    console.log(positionPut);
                    // if (positionPut?.success) {
                    //     handleClose()
                    // }
                })
            })
        }
    }

    if (loading || updatePositionLoading) return <Modal show={showCheck} onHide={handleClose} centered size='lg'><CardLoading /></Modal >
    if (error || deletePositionError) return <Modal show={showCheck} onHide={handleClose} centered size='lg'><CardError /></Modal>

    return (
        <>
            <Button bsPrefix='edit' className={showCheck ? 'icon active' : 'icon'} onClick={handleShow}>
                <FaEdit />
            </Button>

            <Modal show={showCheck} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>ทีม และ หน้าที่งาน</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Col md='6'>
                            <AutoComplete id="position-team" label="เลือกทีม" placeholder="ระบุทีม / แผนกงาน" value={clickTeam} defaultValue={props?.value?.team} checkValue={checkValue} options={teams} />
                        </Col>
                        <Col md='6'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>หน้าที่งาน / ตำแหน่งงาน</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={(e) => { setPositionSelect(e.target.value) }}
                                    value={positionSelect} autoComplete="off"
                                    isValid={checkValue === false && positionSelect !== '' ? true : false}
                                    isInvalid={checkValue === false && positionSelect === '' ? true : false} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsPrefix="cancel" className='my-0' onClick={handleClose}>
                        ยกเลิก
                    </Button>
                    <Button bsPrefix="succeed" className='my-0' onClick={handlePutData}>
                        ยืนยันการเพิ่ม
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}