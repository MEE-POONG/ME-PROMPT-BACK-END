import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Row, Col, Image, InputGroup, Dropdown } from 'react-bootstrap'
import { FaEye, FaEyeSlash, FaPlus, FaUserCircle } from 'react-icons/fa'
import useAxios from 'axios-hooks'
// import AutoComplete from '@/components/AutoComplete'
import CardLoading from '@/components/CardChange/CardLoading'
import CardError from '@/components/CardChange/CardError'
import ModelLoading from '@/components/ModelChange/ModelLoading'
import ModelError from '@/components/ModelChange/ModelError'
export default function CustomerAddModal(props) {
    const [{ data: positionSearch, loading, error }, getpositionSearch] = useAxios({ url: '/api/position/position' })
    const [{ data: customerPost, error: errorMessage, loading: customerLoading }, executeCustomer] = useAxios({ url: '/api/customer', method: 'POST' }, { manual: true });
    const [positionSelect, setPositionSelect] = useState({
        id: '',
        team: '',
        positio: '',
    });

    const [image, setImage] = useState([])
    const [imageURL, setImageURL] = useState([])

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [addressOne, setAddressOne] = useState('');
    const [addressTwo, setAddressTwo] = useState('');
    const [subDistrict, setSubDistrict] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [statusManager, setStatusManager] = useState('A');

    const [facebook, setFacebook] = useState('');
    const [line, setLine] = useState('');
    const [intragarm, setIntragarm] = useState('');

    const [checkValue, setCheckValue] = useState(true);
    const [showCheck, setShowCheck] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const handleClose = () => { setShowCheck(false), setCheckValue(true) };
    const handleShow = () => setShowCheck(true);
    // console.log(position);
    // const teams = positionTeam?.reduce((acc, item) => {
    //     if (!acc.some(i => i.team === item.team)) {
    //         acc.push(item);
    //     }
    //     return acc;
    // }, []);
    const onImageChange = (e) => {
        setImage([...e.target.files])
    }


    useEffect(() => {
        if (image.length < 1) return
        const newImageUrl = []
        image.forEach(image => newImageUrl.push(URL.createObjectURL(image)))
        setImageURL(newImageUrl)
    }, [image])

    const clickHandler = () => {
        setShowPass(!showPass);
    }
    const clickHandlerClose = () => {
        setShowPass(false);
    }
    const handleSubmit = () => {
        setCheckValue(false)
        console.log(74);
        // if (username !== '' && password !== '' && image !== '' && firstname !== '' && lastname !== '' && positionSelect?.id !== '' && facebook !== '' && line !== '' && intragarm !== '') {
        //     console.log(76);
        //     executeCustomer({
        //         data: {
        //             username: username,
        //             password: password,
        //             img: image,
        //             firstname: firstname,
        //             lastname: lastname,
        //             positionId: positionSelect?.id,
        //             postalCode: postalCode,
        //             city: city,
        //             district: district,
        //             subDistrict: subDistrict,
        //             addressOne: addressOne,
        //             addressTwo: addressTwo,
        //             statusManager: statusManager,
        //             facebook: facebook,
        //             line: line,
        //             intragarm: intragarm,
        //         }
        //     }).then(() => {
        //         Promise.all([
        //             setUsername(''),
        //             setPassword(''),
        //             setImage(''),
        //             setFirstname(''),
        //             setLastname(''),
        //             setPositionSelect({ ...positionSelect, id: '', team: '', position: '' }),

        //             setAddressOne(''),
        //             setAddressTwo(''),
        //             setSubDistrict(''),
        //             setDistrict(''),
        //             setCity(''),
        //             setPostalCode(''),

        //             setStatusManager(''),
        //             setFacebook(''),
        //             setLine(''),
        //             setIntragarm(''),

        //             props.getData(),
        //         ]).then(() => {
        //             handleClose()
        //         })
        //     });
        // }
    }

    if (loading || customerLoading) return <ModelLoading showCheck={showCheck} />
    if (error || errorMessage) return <ModelError show={showCheck} fnShow={handleClose} centered size='lg' />
    return (
        <>
            <Button bsPrefix="create" className={showCheck ? 'icon active d-flex' : 'icon d-flex'} onClick={handleShow}>
                <FaPlus />{" "}เพิ่มสมาชิก
            </Button>
            <Modal show={showCheck} onHide={handleClose} centered size='lg' className='form-customer'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>เพิ่มสมาชิกพนักงานองค์กร</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Row>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="image">
                                <Form.Label className='text-center'>เลือกรูปโปรไฟล์</Form.Label>
                                <Image
                                    width={"100%"}
                                    height="200px"
                                    src={imageURL?.length !== 0 ? imageURL?.map((imageSrcAbout) => imageSrcAbout) : "./images/default.png"}
                                    className="p-4 object-fit-contain"
                                    alt="" />
                                <Form.Control type="file" accept="img/*" onChange={onImageChange} />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Row>
                                <Col md='12'>
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="สร้างยูสเซอร์ประจำตัว"
                                            onChange={event => setUsername(event.target.value)}
                                            isValid={checkValue === false && username !== '' ? true : false}
                                            isInvalid={checkValue === false && username === '' ? true : false}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md='12'>
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup className="mb-3" onClick={clickHandler} onMouseOut={clickHandlerClose}>
                                        <Form.Control aria-label="Amount (to the nearest dollar)"
                                            type={showPass ? "type" : "password"} placeholder="ระบุรหัสผ่าน"
                                            id="password"
                                            onChange={event => setPassword(event.target.value)}
                                            isValid={checkValue === false && password !== '' ? true : false}
                                            isInvalid={checkValue === false && password === '' ? true : false}
                                        />
                                        <InputGroup.Text >{showPass ? <FaEye /> : <FaEyeSlash />}</InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <h4>ข้อมูลส่วนตัว</h4>
                    <Row className="mb-3">
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="firstname">
                                <Form.Label>ชื่อ</Form.Label>
                                <Form.Control type="text" placeholder="ระบุ ชื่อจริง"
                                    onChange={event => setFirstname(event.target.value)}
                                    isValid={checkValue === false && firstname !== '' ? true : false}
                                    isInvalid={checkValue === false && firstname === '' ? true : false}
                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Label>นามสกุล</Form.Label>
                                <Form.Control type="text" placeholder="ระบุนามสกุล"
                                    onChange={event => setLastname(event.target.value)}
                                    isValid={checkValue === false && lastname !== '' ? true : false}
                                    isInvalid={checkValue === false && lastname === '' ? true : false}
                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>

                            <Form.Group className="mb-3" controlId="position">
                                <Form.Label>ทีม / แผนกงาน</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    disabled
                                    value={positionSelect?.team}
                                />
                            </Form.Group>

                        </Col>
                        <Col md='6'>
                            <Form.Label>หน้าที่ / ตำแหน่งงาน</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle id="team" bsPrefix='p-0' className="w-100" >
                                    <Form.Control
                                        autoFocus
                                        autoComplete="off"
                                        placeholder="ระบุหน้าที่งาน / ตำแหน่งงาน"
                                        onChange={event => setPositionSelect(event.target.value)}
                                        value={positionSelect?.position}
                                        isValid={checkValue === false && positionSelect !== '' ? true : false}
                                        isInvalid={checkValue === false && positionSelect === '' ? true : false}
                                    />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='w-100'>
                                    {positionSearch?.map(item => (
                                        <Dropdown.Item key={item.id} onClick={() => { setPositionSelect(item) }}>
                                            {item.position}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <h4>ที่อยู่</h4>
                    <Row>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="postalCode">
                                <Form.Label>รหัสไปษณีย์</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setPostalCode(event.target.value)}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="city">
                                <Form.Label>จังหวัด</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setCity(event.target.value)}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="district">
                                <Form.Label>อำเภอ</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setDistrict(event.target.value)}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="subDistrict">
                                <Form.Label>ตำบล</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setSubDistrict(event.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="addressOne">
                                <Form.Label>ที่อยู่</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setAddressOne(event.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="addressTwo">
                                <Form.Label>ที่อยู่ เพิ่มเติม</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setAddressTwo(event.target.value)}

                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <h4>โซเชียล</h4>
                    <Row>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="facebook">
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setFacebook(event.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="line">
                                <Form.Label>Line</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setLine(event.target.value)}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="intragarm">
                                <Form.Label>Intragarm</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setIntragarm(event.target.value)}
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