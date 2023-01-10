import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap'
import { FaPlus, FaUserCircle } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import AutoComplete from '@/components/AutoComplete'
import CardLoading from '@/components/CardChange/CardLoading'
import CardError from '@/components/CardChange/CardError'
export default function CustomerAddModal(props) {
    // const [{ data: positionTeam, loading, error }, getPositionTeam] = useAxios({ url: '/api/positon/team' })
    // const [{ data: customerPost, error: errorMessage, loading: customerLoading }, executeCustomerTeam] = useAxios({ url: '/api/customer', method: 'POST' }, { manual: true });
    const [positionSelect, setPositionSelect] = useState('');

    const [img, setImg] = useState('');

    const [image, setImage] = useState([])
    const [imageURL, setImageURL] = useState([])

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [facebook, setFacebook] = useState('');
    const [line, setLine] = useState('');
    const [intragarm, setIntragarm] = useState('');
    const [addressOne, setAddressOne] = useState('');
    const [addressTwo, setAddressTwo] = useState('');
    const [addressThree, setAddressThree] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [status, setStatus] = useState('');

    const [checkValue, setCheckValue] = useState(true);
    const [showCheck, setShowCheck] = useState(false);


    const handleClose = () => { setShowCheck(false), setCheckValue(true) };
    const handleShow = () => setShowCheck(true);
    // const teams = positionTeam?.reduce((acc, item) => {
    //     if (!acc.some(i => i.team === item.team)) {
    //         acc.push(item);
    //     }
    //     return acc;
    // }, []);
    const onImageCustomerChange = (e) => {
        setImg([...e.target.files])
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
    const handleSubmit = () => {
        // setCheckValue(false)
        if (username !== '' && password !== '') {
            console.log("ssss");
            executeCustomerTeam({
                data: {
                    team: positionSelect,
                    customer: customerSelect,
                }
            }).then(() => {
                Promise.all([
                    setPositionSelect(''),
                    setCustomerSelect(''),
                    props.getData(),
                ]).then(() => {
                    handleClose()
                })
            });
        }
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
        //             // province: province,
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
        //             // setProvince(''),
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
                                {/* <Image
                                    width={"100%"}
                                    height="200px"
                                    src={imageURL ? imageURL?.map((imageSrcAbout) => imageSrcAbout) : "./images/default.png"}
                                    className="p-4 object-fit-contain"
                                    alt="" /> */}
                                {/* {imageURL?.length === 0 && <Image className="mb-2" style={{ height: 200 }} src={img} alt="About_img" fluid rounded />} */}
                                {/* {imageURL?.map((imageSrcAbout, index) => <Image key={index} className="mb-2" style={{ height: 200 }} src={imageSrcAbout} alt="About_img" fluid rounded />)} */}
                                <Form.Control type="file" accept="img/*" onChange={onImageCustomerChange} />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Row>
                                <Col md='12'>
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md='12'>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <h4>ข้อมูลส่วนตัว</h4>
                    <Row className="mb-3">
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="firstname">
                                <Form.Label>ชื่อ</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Label>นามสกุล</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <AutoComplete
                                id="team"
                                label="แผนกงาน"
                                placeholder="ระบุทีม / แผนกงาน"
                                // options={teams}
                                // value={''}
                                valueReturn={clickTeam}
                            // checkValue={checkValue} 
                            />
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="position">
                                <Form.Label>หน้าที่งาน / ตำแหน่งงาน</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"

                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <h4>ที่อยู่</h4>
                    <Row>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="postalCode">
                                <Form.Label>รหัสไปษณีย์</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="province">
                                <Form.Label>จังหวัด</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="district">
                                <Form.Label>อำเภอ</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="subDistrict">
                                <Form.Label>ตำบล</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="addressOne">
                                <Form.Label>ที่อยู่</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="addressTwo">
                                <Form.Label>ที่อยู่ เพิ่มเติม</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"

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

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="line">
                                <Form.Label>Line</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="intragarm">
                                <Form.Label>Intragarm</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"

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