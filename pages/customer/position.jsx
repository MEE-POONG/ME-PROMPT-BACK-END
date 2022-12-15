import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Card, Button, Form, Image, InputGroup, Row, Col, Table } from 'react-bootstrap'
import { FaEdit, FaEye, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import PageLoading from '@/components/PageChange/pageLoading'
import PageError from '@/components/PageChange/pageError'
import PositionModel from '@/container/Position/PositionModel'

export default function PositionPage() {
    const [{ data: positionData, loading, error }, getPosition] = useAxios({ url: '/api/position' })

    if (loading) return <PageLoading />
    if (error) return <PageError />
    return (
        <>
            <Container fluid className="pt-4 px-4">
                <Card className="bg-secondary text-center rounded shadow p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <Card.Title className="mb-0">
                            รายการสินค้า
                        </Card.Title>
                        <PositionModel/>
                    </div>
                    <div className="table-responsive">
                        <Table className="table table-striped table-hover mb-0">
                            <thead>
                                <tr className="text-center">
                                    <th >No.</th>
                                    <th >ทีม</th>
                                    <th >ตำแหน่งงาน</th>
                                    <th >จัดการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {positionData?.map((position, index) => (
                                    <tr key={index}>
                                        <td>
                                            {index + 1}.
                                        </td>
                                        <td>
                                            {position.team}
                                        </td>
                                        <td>
                                            {position.position}
                                        </td>
                                        <td>
                                            <Button bsPrefix='icon edit'
                                                onClick={() => ShowModalEdit(position.id)}
                                            >
                                                <FaEdit />
                                            </Button>
                                            <Button bsPrefix='icon delete'
                                            // onClick={() => executePositionDelete({ url: '/api/position/' + position.id, method: 'DELETE' })}
                                            >
                                                <FaTrash />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </Container>

        </>
    )
}
PositionPage.layout = IndexPage