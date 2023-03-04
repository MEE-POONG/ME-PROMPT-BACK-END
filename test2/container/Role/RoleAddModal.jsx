import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col, Dropdown, Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import AutoComplete from '@/components/AutoComplete'
import ModelLoading from '@/components/ModelChange/ModelLoading'
import ModelError from '@/components/ModelChange/ModelError'
export default function RoleAddModal(props) {
    // const [{ data: roleTeam, loading, error }, getRoleTeam] = useAxios({ url: '/api/role/team' })
    // const [{ data: rolePost, error: errorMessage, loading: roleLoading }, executeRoleTeam] = useAxios({ url: '/api/role', method: 'POST' }, { manual: true });
    // const [teamSelect, setTeamSelect] = useState('');
    // const [roleSelect, setRoleSelect] = useState('');
    const [checkValue, setCheckValue] = useState(true);
    const [showCheck, setShowCheck] = useState(false);


    const handleClose = () => { setShowCheck(false), setCheckValue(true) };
    const handleShow = () => setShowCheck(true);
    // const teams = roleTeam?.reduce((acc, item) => {
    //     if (!acc.some(i => i.team === item.team)) {
    //         acc.push(item);
    //     }
    //     return acc;
    // }, []);

    // const clickTeam = value => {
    //     setTeamSelect(value);
    // };
    const handleSubmit = () => {
        setCheckValue(false)
        //     if (teamSelect !== '' && roleSelect !== '') {
        //         executeRoleTeam({
        //             data: {
        //                 team: teamSelect,
        //                 role: roleSelect,
        //             }
        //         }).then(() => {
        //             Promise.all([
        //                 setTeamSelect(''),
        //                 setRoleSelect(''),
        //                 props.getData(),
        //             ]).then(() => {
        //                 handleClose()
        //             })
        //         });
        //     }
    }

    // if (loading || roleLoading) return <ModelLoading showCheck={showCheck} />
    // if (error || errorMessage) return <ModalError show={showCheck} fnShow={handleClose} centered size='lg' />
    return (
        <>
            <Button bsPrefix="create" className={showCheck ? 'icon active d-flex' : 'icon d-flex'} onClick={handleShow}>
                <FaPlus />{" "}เพิ่มตำแหน่งผู้ดูแลเว็บ
            </Button>
            <Modal show={showCheck} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>เพิ่มตำแหน่งผู้ดูแลเว็บ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Col md='12'>
                            <Form.Group controlId="formBasicEmail" className='mb-3'>
                                <Form.Label>ระบุชื่อตำแหน่ง</Form.Label>
                                <Form.Control type="text" placeholder="ชื่อตำแหน่ง"
                                />
                            </Form.Group>
                        </Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th rowspan="2">ลำดับ</th>
                                    <th rowspan="2" className='text-center'>หน้า</th>
                                    <th colSpan="4" className='text-center'>สิทธิเข้าถึง</th>
                                </tr>
                                <tr>
                                    <th className='text-center'>ดู</th>
                                    <th className='text-center'>เพิ่ม</th>
                                    <th className='text-center'>แก้ไข</th>
                                    <th className='text-center'>ลบ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td className='text-center'>Setting</td>
                                    <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                                    <td className='text-center'> <Form.Check aria-label="option 1"  /></td>
                                    <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                                    <td className='text-center'> <Form.Check aria-label="option 1"  /></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className='text-center'>Member : สมาชิก</td>
                                    <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                                    <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                                    <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                                    <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className='text-center'>Member : ทีม</td>
                                    <td className='text-center'> <Form.Check aria-label="option 1" disabled /></td>
                                    <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                                    <td className='text-center'> <Form.Check aria-label="option 1" disabled /></td>
                                    <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsPrefix="cancel" className='my-0' onClick={handleClose}>
                        ยกเลิก
                    </Button>
                    <Button bsPrefix="succeed" className='my-0' onClick={handleSubmit}>
                        ยืนยันการเพิ่ม
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}