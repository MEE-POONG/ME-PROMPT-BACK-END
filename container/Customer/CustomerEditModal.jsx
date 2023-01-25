import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Row, Col, Image, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import { FaEdit, FaEye, FaEyeSlash, FaPlus, FaUserCircle } from 'react-icons/fa'
import { Typeahead } from 'react-bootstrap-typeahead'
import useAxios from 'axios-hooks'
// import AutoComplete from '@/components/AutoComplete'
import ModelLoading from '@/components/ModelChange/ModelLoading'
import ModelError from '@/components/ModelChange/ModelError'
export default function CustomerEditModal(props) {
    const [{ data: positionSearch, loading, error }, getpositionSearch] = useAxios({ url: '/api/position/position' })
    const [{ loading: imgLoading, error: imgError }, uploadImage] = useAxios({ url: '/api/upload', method: 'POST' }, { manual: true });
    const [{ loading: updateLoading, error: updateError }, executeUpdatePut] = useAxios({}, { manual: true })

    const [positionSelect, setPositionSelect] = useState([{ id: "", position: "", team: "" }]);

    const [img, setImg] = useState([]);
    const [image, setImage] = useState([]);
    const [imageURL, setImageURL] = useState([]);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [addressOne, setAddressOne] = useState('');
    const [addressTwo, setAddressTwo] = useState('');
    const [subDistrict, setSubDistrict] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState(''); <s></s>
    const [postalCode, setPostalCode] = useState('');
    const [statusManager, setStatusManager] = useState("");

    const [facebook, setFacebook] = useState('');
    const [line, setLine] = useState('');
    const [instagram, setInstagram] = useState('');

    const [checkValue, setCheckValue] = useState(true);
    const [showCheck, setShowCheck] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const handleClose = () => { setShowCheck(false), setCheckValue(true) };
    const handleShow = () => { setShowCheck(true), valueDefault(props.value) };

    const valueDefault = (e) => {
        console.log("45 :", e);
        if (e) {
            setPositionSelect(e?.Position === null ? positionSelect : [e?.Position]);
            // setImageDefault(e?.img);
            setImg(e?.img);
            setUsername(e?.username);
            setPassword(e?.password);
            setFirstname(e?.firstname);
            setLastname(e?.lastname);
            setAddressOne(e?.addressOne);
            setAddressTwo(e?.addressTwo);
            setSubDistrict(e?.subDistrict);
            setDistrict(e?.district);
            setCity(e?.city);
            setPostalCode(e?.postalCode);
            setStatusManager(e?.statusManager);
            setFacebook(e?.facebook);
            setLine(e?.line);
            setInstagram(e?.instagram);
        }
    };
    const [options, setOptions] = useState([]);
    useEffect(() => {
        if (positionSearch) setOptions(positionSearch);
    }, [positionSearch])

    const onImageChange = (e) => {
        setImage([...e.target.files]);
    };
    useEffect(() => {
        if (image?.length < 1) return
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
    const handleSubmit = async () => {
        let id = '';
        setCheckValue(false);

        if (username !== '' && password !== '' && image !== '' && firstname !== '' && lastname !== '' && positionSelect?.id !== '' && facebook !== '' && line !== '' && instagram !== '') {
            if (image.length > 0) {
                let data = new FormData();
                data.append("file", image[0]);
                const imageData = await uploadImage({ data: data });
                id = imageData.data.result.id;

            }
            executeUpdatePut({
                url: '/api/customer/' + props?.value?.id,
                method: 'PUT',
                data: {
                    username: username,
                    password: password,
                    img: image.length > 0 ? `https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${id}/public` : img,
                    firstname: firstname,
                    lastname: lastname,
                    positionId: positionSelect?.[0]?.id,
                    postalCode: postalCode,
                    city: city,
                    district: district,
                    subDistrict: subDistrict,
                    addressOne: addressOne,
                    addressTwo: addressTwo,
                    statusManager: statusManager,
                    facebook: facebook,
                    line: line,
                    instagram: instagram,
                }
            }).then(() => {
                Promise.all([
                    setUsername(''),
                    setPassword(''),
                    setImage(''),
                    setFirstname(''),
                    setLastname(''),

                    setPostalCode(''),
                    setCity(''),
                    setDistrict(''),
                    setSubDistrict(''),
                    setAddressOne(''),
                    setAddressTwo(''),

                    setStatusManager(''),
                    setFacebook(''),
                    setLine(''),
                    setInstagram(''),

                    props.getData(),
                ]).then(() => {
                    handleClose()
                })
            });
        }
    }

    if (loading || updateLoading || imgLoading) return <ModelLoading showCheck={showCheck} />
    if (error || updateError || imgError) return <ModelError show={showCheck} fnShow={handleClose} centered size='lg' />
    return (
        <>
            <Button bsPrefix='edit' className={showCheck ? 'icon active' : 'icon'} onClick={handleShow}>
                <FaEdit />
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
                                    src={imageURL?.length === 0 ? img : imageURL?.map((imageSrcProduct) => (imageSrcProduct))}
                                    className="p-4 object-fit-contain"
                                    alt="" />
                                <Form.Control type="file" accept="img/*" onChange={onImageChange}
                                    isValid={checkValue === false && image.length > 1 ? true : false}
                                    isInvalid={checkValue === false && image.length === 0 ? true : false}
                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Row>
                                <Col md='12'>
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="สร้างยูสเซอร์ประจำตัว"
                                            onChange={event => setUsername(event.target.value)}
                                            value={username}
                                            isValid={checkValue === false && username !== '' ? true : false}
                                            isInvalid={checkValue === false && username === '' ? true : false}
                                        />
                                        <Form.Text className={checkValue === false && password.length < 8 ? "text-muted" : "d-none"}>
                                            กรอกอย่างน้อย 8-15 ตัวอักษร
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col md='12'>
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup onClick={clickHandler} onMouseOut={clickHandlerClose} className="mb-3">
                                        <Form.Control
                                            type={showPass ? "type" : "password"} placeholder="ระบุรหัสผ่าน"
                                            value={password}
                                            id="password"
                                            onChange={event => setPassword(event.target.value)}
                                            isValid={checkValue === false && password !== '' ? true : false}
                                            isInvalid={checkValue === false && password === '' ? true : false}
                                        />
                                        <InputGroup.Text >{showPass ? <FaEye /> : <FaEyeSlash />}</InputGroup.Text>
                                    </InputGroup>
                                    <Form.Text className={checkValue === false && password.length < 8 ? "text-muted" : "d-none"}>
                                        กรอกอย่างน้อย 8-15 ตัวอักษร
                                    </Form.Text>
                                </Col>
                                <Col md="12">
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label>Manager Status</Form.Label>
                                        <Form.Select
                                            isValid={checkValue === false && statusManager !== '' ? true : false}
                                            isInvalid={checkValue === false && statusManager === '' ? true : false}
                                            value={statusManager}
                                            onChange={(event) => setStatusManager(event.target.value)}
                                            aria-label="Select an option"
                                        >
                                            <option value="" disabled>-เลือกสถานะดูแลเว็บ-</option>
                                            <option value="Admin">Admin</option>
                                            <option value="Operator">Operator</option>
                                            <option value="Unauthorized">Unauthorized</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <h5>ข้อมูลส่วนตัว</h5>
                    <Row className="mb-3">
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="firstname">
                                <Form.Label>ชื่อ</Form.Label>
                                <Form.Control type="text" placeholder="ระบุ ชื่อจริง"
                                    onChange={event => setFirstname(event.target.value)}
                                    value={firstname}
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
                                    value={lastname}
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
                                    value={positionSelect?.[0]?.team}
                                />
                            </Form.Group>

                        </Col>
                        <Col md='6' >
                            <Form.Label>หน้าที่ / ตำแหน่งงาน</Form.Label>
                            <Typeahead
                                id="basic-typeahead-single"
                                labelKey="position"
                                onChange={setPositionSelect}
                                options={options}
                                placeholder="Choose a state..."
                                defaultSelected={positionSelect}
                            />

                        </Col>
                    </Row>
                    <h5>ที่อยู่</h5>
                    <Row>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="postalCode">
                                <Form.Label>รหัสไปษณีย์</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setPostalCode(event.target.value)}
                                    value={postalCode}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="city">
                                <Form.Label>จังหวัด</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setCity(event.target.value)}
                                    value={city}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="district">
                                <Form.Label>อำเภอ</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setDistrict(event.target.value)}
                                    value={district}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="subDistrict">
                                <Form.Label>ตำบล</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setSubDistrict(event.target.value)}
                                    value={subDistrict}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="addressOne">
                                <Form.Label>ที่อยู่</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setAddressOne(event.target.value)}
                                    value={addressOne}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="addressTwo">
                                <Form.Label>ที่อยู่ เพิ่มเติม</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setAddressTwo(event.target.value)}
                                    value={addressTwo}

                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <h5>โซเชียล</h5>
                    <Row>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="facebook">
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setFacebook(event.target.value)}
                                    value={facebook}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="line">
                                <Form.Label>Line</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setLine(event.target.value)}
                                    value={line}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="instagram">
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setInstagram(event.target.value)}
                                    value={instagram}

                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsPrefix="cancel" className='my-0' onClick={handleClose}>
                        ยกเลิก
                    </Button>
                    <Button bsPrefix="warning" className='my-0' onClick={handleShow}>
                        รีเซ็ต
                    </Button>
                    <Button bsPrefix="succeed" className='my-0' onClick={handleSubmit}>
                        ยืนยันการเพิ่ม
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}