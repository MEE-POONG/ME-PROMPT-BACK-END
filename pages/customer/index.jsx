import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col, Table } from 'react-bootstrap'
import { FaEdit, FaEye, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import PageLoading from '@/components/PageChange/pageLoading'
import PageError from '@/components/PageChange/pageError'
import CreateModel from '@/container/Customer/CreateModel'

export default function CustomerPage() {
    const [{ data: customerData, loading, error }, getCustomer] = useAxios({ url: '/api/customer' })



    // useEffect(() => {
    //     console.log("acb : ", modelCustomer);
    // }, [modelCustomer])

    if (loading) return <PageLoading />
    if (error) return <PageError />
    return (
        <>
            <Container fluid className="pt-4 px-4">
                <div className="bg-secondary text-center rounded shadow p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">รายการสินค้า</h6>
                        {/* <Button bsPrefix='icon create' onClick={CreateModel(true)}>
                            <FaPlus />
                        </Button> */}
                        <CreateModel />
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
                                            {index + 1}.
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
                                        <td>
                                            <Button bsPrefix='icon view'>
                                                <FaEye />
                                            </Button>
                                            <Button bsPrefix='icon edit'
                                            // onClick={() => ShowModalEdit(customer.id)}
                                            >
                                                <FaEdit />
                                            </Button>
                                            <Button bsPrefix='icon delete'
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