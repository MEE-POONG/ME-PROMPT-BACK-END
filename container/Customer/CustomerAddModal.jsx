import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Row, Col, Image, InputGroup } from 'react-bootstrap'
import { FaEye, FaEyeSlash, FaPlus, FaUserCircle } from 'react-icons/fa'
import useAxios from 'axios-hooks'
// import AutoComplete from '@/components/AutoComplete'
import CardLoading from '@/components/CardChange/CardLoading'
import CardError from '@/components/CardChange/CardError'
export default function CustomerAddModal(props) {
    const [{ data: position, positionLoading, positionError }, getPosition] = useAxios({ url: '/api/position/position' })
    // const [{ data: customerPost, error: errorMessage, loading: customerLoading }, executeCustomerTeam] = useAxios({ url: '/api/customer', method: 'POST' }, { manual: true });
    const [positionSelect, setPositionSelect] = useState('');

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
    const [status, setStatus] = useState('A');

    const [facebook, setFacebook] = useState('');
    const [line, setLine] = useState('');
    const [intragarm, setIntragarm] = useState('');

    const [checkValue, setCheckValue] = useState(true);
    const [showCheck, setShowCheck] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const handleClose = () => { setShowCheck(false), setCheckValue(true) };
    const handleShow = () => setShowCheck(true);
    console.log(position);
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

    const clickTeam = value => {
        setPositionSelect(value);
    };
    const clickHandler = () => {
        setShowPass(!showPass);
    }
    const clickHandlerClose = () => {
        setShowPass(false);
    }
    const handleSubmit = () => {
        setCheckValue(false)
        // if (username !== '' && password !== '') {
        //     console.log("ssss");
        //     executeCustomerTeam({
        //         data: {
        //             team: positionSelect,
        //             customer: customerSelect,
        //         }
        //     }).then(() => {
        //         Promise.all([
        //             setPositionSelect(''),
        //             setCustomerSelect(''),
        //             props.getData(),
        //         ]).then(() => {
        //             handleClose()
        //         })
        //     });
        // }

        console.log("username : ", username);
        console.log("password : ", password);
        console.log("image :", image);
        console.log("firstname : ", firstname);
        console.log("lastname : ", lastname);
        console.log("addressOne : ", addressOne);
        console.log("addressTwo : ", addressTwo);
        console.log("subDistrict : ", subDistrict);
        console.log("subDistrict : ", subDistrict);
        console.log("district : ", district);
        console.log("city : ", city);
        console.log("postalCode : ", postalCode);
        console.log("status : ", status);
        console.log("facebook : ", facebook);
        console.log("line : ", line);
        console.log("intragarm :  ", intragarm);
        // if (username !== '' && password !== '') {(async () => {

        //     let data = new FormData()
        //     data.append('file', img[0])
        //     const imageData = await uploadImage({ data: data })
        //     const id = imageData.data.result.id

        //     await executeCustomer({
        //         data: {
        //             username: username,
        //             password: password,
        //             firstname: firstname,
        //             lastname: lastname,
        //             img: `https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${id}/public`,
        //             facebook: facebook,
        //             line: line,
        //             intragarm: intragarm,
        //             addressOne: addressOne,
        //             addressTwo: addressTwo,
        //             addressThree: addressThree,
        //             city: city,
        //             postalCode: postalCode,
        //             status: status,
        //             // city: city,
        //             // district: district,
        //             // subDistrict: subDistrict,
        //         }
        //     }).then(() => {
        //         Promise.all([
        //             setUsername(''),
        //             setPassword(''),
        //             setFirstname(''),
        //             setLastname(''),
        //             setImg(''),
        //             setFacebook(''),
        //             setLine(''),
        //             setIntragarm(''),
        //             setAddressOne(''),
        //             setAddressTwo(''),
        //             setAddressThree(''),
        //             setCity(''),
        //             setPostalCode(''),
        //             setStatus(''),
        //             // setCity(''),
        //             // setDistrict(''),
        //             // setSubDistrict(''),

        //             props.getData(),
        //         ]).then(() => {
        //             handleClose()
        //         })
        //     });
        // })}
    }

    // if (loading || customerLoading) return <Modal show={showCheck} onHide={handleClose} centered size='lg'><CardLoading /></Modal >
    // if (error || errorMessage) return <Modal show={showCheck} onHide={handleClose} centered size='lg'><CardError /></Modal>

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
                                <Form.Label>หน้าที่งาน / ตำแหน่งงาน</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                // isValid={checkValue === false && position !== '' ? true : false}
                                // isInvalid={checkValue === false && position === '' ? true : false}
                                // onChange={event => setPosition(event.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            {/* <AutoComplete
                                id="team"
                                label="หน้าที่ / ตำแหน่งงาน"
                                placeholder="ระบุหน้าที่งาน / ตำแหน่งงาน"
                                options={position}
                                value={''}
                                valueReturn={clickTeam}
                                checkValue={checkValue}
                            /> */}
                          
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