import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import AutoComplete from '@/components/AutoComplete'
import CardLoading from '@/components/CardChange/CardLoading'
import CardError from '@/components/CardChange/CardError'
export default function CustomerAddModal(props) {
    const [{ data: positionTeam, loading, error }, getCustomerTeam] = useAxios({ url: '/api/positon/team' })
    // const [{ data: customerPost, error: errorMessage, loading: customerLoading }, executeCustomerTeam] = useAxios({ url: '/api/customer', method: 'POST' }, { manual: true });
    // const [teamSelect, setTeamSelect] = useState('');
    const [customerSelect, setCustomerSelect] = useState('');
    const [checkValue, setCheckValue] = useState(true);

    const [showCheck, setShowCheck] = useState(false);


    const handleClose = () => { setShowCheck(false), setCheckValue(true) };
    const handleShow = () => setShowCheck(true);
    const teams = positionTeam?.reduce((acc, item) => {
        if (!acc.some(i => i.team === item.team)) {
            acc.push(item);
        }
        return acc;
    }, []);

    const clickTeam = value => {
        setTeamSelect(value);
    };
    const handleSubmit = () => {
        setCheckValue(false)
        if (teamSelect !== '' && customerSelect !== '') {
            executeCustomerTeam({
                data: {
                    team: teamSelect,
                    customer: customerSelect,
                }
            }).then(() => {
                Promise.all([
                    setTeamSelect(''),
                    setCustomerSelect(''),
                    props.getData(),
                ]).then(() => {
                    handleClose()
                })
            });
        }
    }

    // if (loading || customerLoading) return <Modal show={showCheck} onHide={handleClose} centered size='lg'><CardLoading /></Modal >
    // if (error || errorMessage) return <Modal show={showCheck} onHide={handleClose} centered size='lg'><CardError /></Modal>

    return (
        <>
            <Button bsPrefix="create" className={showCheck ? 'icon active d-flex' : 'icon d-flex'} onClick={handleShow}>
                <FaPlus />{" "}เพิ่มหน้าที่งาน
            </Button>
            <Modal show={showCheck} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>เพิ่มทีมและหน้าที่งาน</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Col md='6'>
                            <AutoComplete
                                id="customer-team"
                                label="เลือกทีม"
                                placeholder="ระบุทีม / แผนกงาน"
                                options={teams}
                                value={''}
                                valueReturn={clickTeam}
                                checkValue={checkValue} />
                        </Col>
                        <Col md='6'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>หน้าที่งาน / ตำแหน่งงาน</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={(e) => { setCustomerSelect(e.target.value) }}
                                    value={customerSelect} autoComplete="off"
                                    isValid={checkValue === false && customerSelect !== '' ? true : false}
                                    isInvalid={checkValue === false && customerSelect === '' ? true : false}
                                />
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