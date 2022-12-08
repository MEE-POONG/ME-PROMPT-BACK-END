import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'

export default function CustomerPage() {
    const [aTest, setATest] = useState();
useEffect(() => {
console.log(aTest);
}, [aTest])

    return (
        <>
            <Container fluid className="pt-4 px-4">
                <div className="bg-secondary text-center rounded shadow p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">รายการสินค้า</h6>
                        <Button variant="success" >
                            <FaPlus />
                        </Button>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start table-striped align-middle table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col">รูปภาพ</th>
                                    <th scope="col">ชื่อ - นามสกุล</th>
                                    <th scope="col">ใช้งานเว็บ</th>
                                    <th scope="col">ตำแหน่งงาน</th>
                                    <th scope="col">จัดการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>
                                        {/* <img className="rounded-circle flex-shrink-0" src={product.image} alt="" style={{ width: "40px", height: "40px" }} /> */}
                                    </td>
                                    <td>
                                        {/* {product.name} */}
                                    </td>
                                    <td>
                                        {/* {product?.category?.name} */}
                                    </td>
                                    <td>
                                        {/* {product.amount} {product.unit.name} */}
                                    </td>
                                    <td>
                                        {/* {product.price} บาท */}
                                    </td>
                                    <td>
                                        <Button onClick={() => setATest({ ...aTest, shift: 'ด', atOt: false })}>บ</Button>
                                        <Button onClick={() => setATest({ ...aTest, shift: 'บ', atOt: false })}>ด</Button>
                                        <Button onClick={() => setATest({ ...aTest, shift: 'ช', atOt: false })}>ช</Button>
                                        <Button onClick={() => setATest({ ...aTest, shift: 'ล', atOt: false })}>ล</Button>
                                        <Button onClick={() => setATest({ ...aTest, shift: 'x', atOt: false })}>พ</Button>
                                        <a className="btn btn-sm btn-success me-2"
                                        // onClick={() => ShowModalEdit(product.id)}
                                        ><FaEdit /></a>
                                        <a className="btn btn-sm btn-danger me-2"
                                        // onClick={() => executeProductDelete({
                                        //     url: '/api/products/' + product.id,
                                        //     method: 'DELETE'
                                        // })}
                                        ><FaTrash /></a>
                                    </td>
                                    {/* {productData?.map((product, index) => (
d>
                                ))} */}
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>


        </>
    )
}
CustomerPage.layout = IndexPage