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

    const [positionSelect, setPositionSelect] = useState([]);

    const [img, setImg] = useState([])
    const [image, setImage] = useState([])
    const [imageDefault, setImageDefault] = useState("./images/default.png")
    const [imageURL, setImageURL] = useState([])

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
    const handleShow = () => setShowCheck(true);

    useEffect(() => {
        if (props) {
            console.log(props);
            setPositionSelect(props?.value?.Position);
            setImageDefault(props?.value?.img);
            setImg(props?.value?.img);
            setUsername(props?.value?.username);
            setPassword(props?.value?.password);
            setFirstname(props?.value?.firstname);
            setLastname(props?.value?.lastname);
            setAddressOne(props?.value?.addressOne);
            setAddressTwo(props?.value?.addressTwo);
            setSubDistrict(props?.value?.subDistrict);
            setDistrict(props?.value?.district);
            setCity(props?.value?.city);
            setPostalCode(props?.value?.postalCode);
            setStatusManager(props?.value?.statusManager);
            setFacebook(props?.value?.facebook);
            setLine(props?.value?.line);
            setInstagram(props?.value?.instagram);

        }
    }, [props]);

    const [options, setOptions] = useState([]);
    useEffect(() => {
        if (positionSearch) setOptions(positionSearch);
    }, [positionSearch])

    const onImageChange = (e) => {
        setImage([...e.target.files])
    }
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
        setCheckValue(false);
        if (username !== '' && password !== '' && image !== '' && firstname !== '' && lastname !== '' && positionSelect?.id !== '' && facebook !== '' && line !== '' && instagram !== '') {
            let data = new FormData()
            if (image.length > 0) {
                data.append('file', image[0])
                const imageData = await uploadImage({ data: data })
                let id = imageData.data.result.id;
            }
            console.log("id", `https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${id}/public`);
            console.log("username", username);
            console.log("password", password);
            console.log("img", image.length > 0 ? `https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${id}/public` : img);
            console.log("firstname", firstname);
            console.log("lastname", lastname);
            console.log("positionSelect", positionSelect);
            console.log("postalCode", postalCode);
            console.log("city", city);
            console.log("district", district);
            console.log("subDistrict", subDistrict);
            console.log("addressOne", addressOne);
            console.log("addressTwo", addressTwo);
            console.log("statusManager", statusManager);
            console.log("facebook", facebook);
            console.log("line", line);
            console.log("instagram", instagram);
            // executeUpdatePut({
            //     url: '/api/position/' + props?.value?.id,
            //     method: 'PUT',
            //     data: {
            //         username: username,
            //         password: password,
            //         img: `https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/${id}/public`,
            //         firstname: firstname,
            //         lastname: lastname,
            //         positionId: positionSelect?.id,
            //         postalCode: postalCode,
            //         city: city,
            //         district: district,
            //         subDistrict: subDistrict,
            //         addressOne: addressOne,
            //         addressTwo: addressTwo,
            //         statusManager: statusManager,
            //         facebook: facebook,
            //         line: line,
            //         instagram: instagram,
            //     }
            // }).then(() => {
            //     Promise.all([
            //         setUsername(''),
            //         setPassword(''),
            //         setImage(''),
            //         setFirstname(''),
            //         setLastname(''),

            //         setPostalCode(''),
            //         setCity(''),
            //         setDistrict(''),
            //         setSubDistrict(''),
            //         setAddressOne(''),
            //         setAddressTwo(''),

            //         setStatusManager(''),
            //         setFacebook(''),
            //         setLine(''),
            //         setInstagram(''),

            //         props.getData(),
            //     ]).then(() => {
            //         handleClose()
            //     })
            // });
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
                                    src={imageURL?.length !== 0 ? imageURL?.map((imageSrcAbout) => imageSrcAbout) : imageDefault}
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
                                            defaultValue={username}
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
                                            defaultValue={password}
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
                                            defaultValue={statusManager}
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
                                    defaultValue={firstname}
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
                                    defaultValue={lastname}
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
                                    defaultValue={positionSelect?.team}
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
                                defaultInputValue={props?.value?.Position?.position}
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
                                    defaultValue={postalCode}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="city">
                                <Form.Label>จังหวัด</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setCity(event.target.value)}
                                    defaultValue={city}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="district">
                                <Form.Label>อำเภอ</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setDistrict(event.target.value)}
                                    defaultValue={district}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="subDistrict">
                                <Form.Label>ตำบล</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setSubDistrict(event.target.value)}
                                    defaultValue={subDistrict}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="addressOne">
                                <Form.Label>ที่อยู่</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setAddressOne(event.target.value)}
                                    defaultValue={addressOne}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="addressTwo">
                                <Form.Label>ที่อยู่ เพิ่มเติม</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setAddressTwo(event.target.value)}
                                    defaultValue={addressTwo}

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
                                    defaultValue={facebook}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="line">
                                <Form.Label>Line</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setLine(event.target.value)}
                                    defaultValue={line}

                                />
                            </Form.Group>
                        </Col>
                        <Col md='6'>
                            <Form.Group className="mb-3" controlId="instagram">
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control type="text" placeholder="เพิ่ม หน้าที่ / ตำแหน่งงาน"
                                    onChange={event => setInstagram(event.target.value)}
                                    defaultValue={instagram}

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