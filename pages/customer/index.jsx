import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col } from 'react-bootstrap'
import { FaEdit, FaEye, FaPlus, FaTrash } from 'react-icons/fa'
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
                                <tr className="text-center">
                                    <th >No.</th>
                                    <th >รูปภาพ</th>
                                    <th >ชื่อ - นามสกุล</th>
                                    <th >ใช้งานเว็บ</th>
                                    <th >ตำแหน่งงาน</th>
                                    <th >จัดการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <th className='text-end'>
                                        1.
                                    </th>
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
                                    <td className='manager'>
                                        <Button >
                                            <FaEye />
                                        </Button>
                                        <Button bsPrefix='edit btn btn-warning'
                                            onClick={() => ShowModalEdit(product.id)}
                                        >
                                            <FaEdit />
                                        </Button>
                                        <Button bsPrefix='delete btn btn-danger'
                                            onClick={() => executeProductDelete({
                                                url: '/api/products/' + product.id,
                                                method: 'DELETE'
                                            })}
                                        >
                                            <FaTrash />
                                        </Button>
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