import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col, Table } from 'react-bootstrap'
import { FaEdit, FaEye, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'

export default function CustomerPage() {
    const [{ data: customerData, loading, error }, getCustomer] = useAxios({ url: '/api/customer' })
    // const [{ data: customerById, loading: customerByIdLoading, error: customerByIdError }, getCustomerById] = useAxios({}, { manual: true })
    // const [{ data: postData, error: errorMessage, loading: customerLoading }, executeCustomer] = useAxios({ url: '/api/customers', method: 'POST' }, { manual: true });
    // const [{ loading: updateCustomerLoading, error: updateCustomerError }, executeCustomerPut] = useAxios({}, { manual: true })
    const [{ loading: deleteCustomerLoading, error: deleteCustomerError }, executeCustomerDelete] = useAxios({}, { manual: true })
    // const [name, setName] = useState('');
    // const [price, setPrice] = useState('');
    // const [category, setCategory] = useState('');
    // const [description, setDescription] = useState('');
    // const [unit, setUnit] = useState('');
    // const [amount, setAmount] = useState('');
    // const [img, setImg] = useState('');

    useEffect(() => {
        console.log("acb : ", customerData);
    }, [customerData])
    // useEffect(() => {
    //     setName(customerData?.name)
    //     setPrice(customerData?.price)
    //     setCategory(customerData?.categoryId)
    //     setDescription(customerData?.description)
    //     setUnit(customerData?.unitId)
    //     setAmount(customerData?.amount)
    //     setImg(customerData?.image)
    // }, [customerData])
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
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
                        <Table className="table table-striped table-hover mb-0">
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
                                {customerData?.map((customer, index) => (
                                    <tr key={index}>
                                        <td>
                                            1.
                                        </td>
                                        <td>
                                            <Image className="rounded" src={customer?.img} alt="" style={{ width: "100px", height: "100px" }} />
                                        </td>
                                        <td>
                                            {customer.firstname}{" "}{customer.lastname}
                                        </td>
                                        <td>
                                            {customer.status}
                                        </td>
                                        <td>
                                            {customer.Position.team}
                                            <br />
                                            {customer.Position.position}
                                        </td>
                                        <td className='manager'>
                                            <Button bsPrefix='view'>
                                                <FaEye />
                                            </Button>
                                            <Button bsPrefix='edit'
                                            // onClick={() => ShowModalEdit(customer.id)}
                                            >
                                                <FaEdit />
                                            </Button>
                                            <Button bsPrefix='delete'
                                            // onClick={() => executeCustomerDelete({ url: '/api/customer/' + customer.id, method: 'DELETE' })}
                                            >
                                                <FaTrash />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>


        </>
    )
}
CustomerPage.layout = IndexPage