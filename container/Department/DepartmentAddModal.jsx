import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col, Dropdown, Image } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import AutoComplete from '@/components/AutoComplete'
import ModelLoading from '@/components/ModelChange/ModelLoading'
import ModelError from '@/components/ModelChange/ModelError'
import Editor from '@/components/Ckeditor/Editor'
import FileInput, { GalleryInput, ProfileInput } from '@/components/InputFile'
export default function DepartmentAddModal(props) {
    // const [{ data: departmentTeam, loading, error }, getDepartmentTeam] = useAxios({ url: '/api/department/team' })
    // const [{ data: departmentPost, error: errorMessage, loading: departmentLoading }, executeDepartmentTeam] = useAxios({ url: '/api/department', method: 'POST' }, { manual: true });
    const [teamSelect, setTeamSelect] = useState('');
    const [departmentSelect, setDepartmentSelect] = useState('');
    const [checkValue, setCheckValue] = useState(true);
    const [showCheck, setShowCheck] = useState(false);

    const handleClose = () => { setShowCheck(false), setCheckValue(true) };
    const handleShow = () => setShowCheck(true);
    // const teams = departmentTeam?.reduce((acc, item) => {
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
        //     if (teamSelect !== '' && departmentSelect !== '') {
        //         executeDepartmentTeam({
        //             data: {
        //                 team: teamSelect,
        //                 department: departmentSelect,
        //             }
        //         }).then(() => {
        //             Promise.all([
        //                 setTeamSelect(''),
        //                 setDepartmentSelect(''),
        //                 props.getData(),
        //             ]).then(() => {
        //                 handleClose()
        //             })
        //         });
        //     }
    }

    // if (loading || departmentLoading) return <ModelLoading showCheck={showCheck} />
    // if (error || errorMessage) return <ModelError show={showCheck} fnShow={handleClose} centered size='lg' />
    return (
        <>
            <Button bsPrefix="create" className={showCheck ? 'icon active d-flex' : 'icon d-flex'} onClick={handleShow}>
                <FaPlus />{" "}เพิ่มแผนกงาน

            </Button>
            <Modal show={showCheck} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>เพิ่มแผนกงาน</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Col md='6'>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Label>ชื่อแผนกงาน</Form.Label>
                                <Form.Control type="text" placeholder="ระบุแผนกงาน"
                                />
                            </Form.Group>
                            <GalleryInput />
                        </Col>
                        <Col md='6'>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Label>รูปหลักประจำแผนก</Form.Label>
                                <ProfileInput />
                            </Form.Group>
                        </Col>
                        <Col md='12'>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Label>หน้าที่งาน / ตำแหน่งงาน</Form.Label>
                                <Editor />
                            </Form.Group>
                        </Col>
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