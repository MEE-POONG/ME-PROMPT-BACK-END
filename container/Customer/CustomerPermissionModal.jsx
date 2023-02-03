import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Row, Col, Image, InputGroup, Dropdown, DropdownButton, Table } from 'react-bootstrap'
import { FaEdit, FaEye, FaEyeSlash, FaPlus, FaUserCircle, FaUserTag } from 'react-icons/fa'
import { Typeahead } from 'react-bootstrap-typeahead'
import useAxios from 'axios-hooks'
// import AutoComplete from '@/components/AutoComplete'
import ModelLoading from '@/components/ModelChange/ModelLoading'
import ModelError from '@/components/ModelChange/ModelError'
export default function CustomerPermissionModal(props) {
    const [position, setPosition] = useState([]);

    const [img, setImg] = useState([]);
    const [image, setImage] = useState([]);
    const [imageURL, setImageURL] = useState([]);


    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const [checkValue, setCheckValue] = useState(true);
    const [showCheck, setShowCheck] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const handleClose = () => { setShowCheck(false), setCheckValue(true) };
    const handleShow = () => { setShowCheck(true), valueDefault(props.value) };

    const valueDefault = (e) => {
        console.log("45 :", e);
        if (e) {
            setPosition(e?.Position);
            // setImageDefault(e?.img);
            setImg(e?.img);
            setFirstname(e?.firstname);
            setLastname(e?.lastname);
        }
    };





    // const handleSubmit = async () => {
    //     let id = '';
    //     setCheckValue(false);

    //     if (username !== '' && password !== '' && image !== '' && firstname !== '' && lastname !== '' && positionSelect?.id !== '' && facebook !== '' && line !== '' && instagram !== '') {
    //         if (image.length > 0) {
    //             let data = new FormData();
    //             data.append("file", image[0]);
    //             const imageData = await uploadImage({ data: data });
    //             id = imageData.data.result.id;

    //         }
    //         executeUpdatePut({
    //             url: '/api/customer/' + props?.value?.id,
    //             method: 'PUT',
    //             data: {
    //                 username: username,
    //                 password: password,
    //                 img: image.length > 0 ? `https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${id}/public` : img,
    //                 firstname: firstname,
    //                 lastname: lastname,
    //                 positionId: positionSelect?.[0]?.id,
    //                 postalCode: postalCode,
    //                 city: city,
    //                 district: district,
    //                 subDistrict: subDistrict,
    //                 addressOne: addressOne,
    //                 addressTwo: addressTwo,
    //                 statusManager: statusManager,
    //                 facebook: facebook,
    //                 line: line,
    //                 instagram: instagram,
    //             }
    //         }).then(() => {
    //             Promise.all([
    //                 setUsername(''),
    //                 setPassword(''),
    //                 setImage(''),
    //                 setFirstname(''),
    //                 setLastname(''),

    //                 setPostalCode(''),
    //                 setCity(''),
    //                 setDistrict(''),
    //                 setSubDistrict(''),
    //                 setAddressOne(''),
    //                 setAddressTwo(''),

    //                 setStatusManager(''),
    //                 setFacebook(''),
    //                 setLine(''),
    //                 setInstagram(''),

    //                 props.getData(),
    //             ]).then(() => {
    //                 handleClose()
    //             })
    //         });
    //     }
    // }

    // if (loading || updateLoading || imgLoading) return <ModelLoading showCheck={showCheck} />
    // if (error || updateError || imgError) return <ModelError show={showCheck} fnShow={handleClose} centered size='lg' />
    return (
        <>
            <Button bsPrefix='permission' className={showCheck ? 'icon active' : 'icon'} onClick={handleShow}>
                <FaUserTag />
            </Button>
            <Modal show={showCheck} onHide={handleClose} fullscreen={'lg-down'} centered size='lg' className='form-customer'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>สิทธิเข้าถึง {firstname} {lastname}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Row>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="image">
                                <Image
                                    width={"100%"}
                                    height="200px"
                                    src={imageURL?.length === 0 ? img : imageURL?.map((imageSrcProduct) => (imageSrcProduct))}
                                    className="p-0 object-fit-contain"
                                    alt="" />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Row>

                                <p>ทีม / แผนกงาน : {position?.team}</p>
                                <p>ตำแหน่งงาน : {position?.position}</p>

                            </Row>
                        </Col>
                    </Row>
                    <h5>รายการสิทธเข้าถึง</h5>
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
                                <td className='text-center'> <Form.Check aria-label="option 1"  /></td>
                                <td className='text-center'> <Form.Check aria-label="option 1" disabled /></td>
                                <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                                <td className='text-center'> <Form.Check aria-label="option 1" disabled /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td className='text-center'>Customer : สมาชิก</td>
                                <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                                <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                                <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                                <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td className='text-center'>Customer : ทีม</td>
                                <td className='text-center'> <Form.Check aria-label="option 1" disabled/></td>
                                <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                                <td className='text-center'> <Form.Check aria-label="option 1" disabled/></td>
                                <td className='text-center'> <Form.Check aria-label="option 1" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsPrefix="cancel" className='my-0' onClick={handleClose}>
                        ยกเลิก
                    </Button>
                    <Button bsPrefix="warning" className='my-0' onClick={handleShow}>
                        รีเซ็ต
                    </Button>
                    <Button bsPrefix="succeed" className='my-0'>
                        ยืนยันการเพิ่ม
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}