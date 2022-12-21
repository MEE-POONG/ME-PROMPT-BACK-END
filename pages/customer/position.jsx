import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Card, Button, Form, Image, InputGroup, Row, Col, Table } from 'react-bootstrap'
import { FaEdit, FaEye, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import PageLoading from '@/components/PageChange/pageLoading'
import PageError from '@/components/PageChange/pageError'
import PositionAddModal from '@/container/Position/PositionAddModal'
import PositionEditModal from '@/container/Position/PositionEditModal'
import PositionDeleteModal from '@/container/Position/PositionDeleteModal'

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
                        <PositionAddModal getData={getPosition} />
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
                                {positionData?.map((positionData, index) => (
                                    <tr key={index}>
                                        <td>
                                            {index + 1}.
                                        </td>
                                        <td>
                                            {positionData.team}
                                        </td>
                                        <td>
                                            {positionData.position}
                                        </td>
                                        <td>
                                            <PositionEditModal value={positionData} getData={getPosition} />
                                            <PositionDeleteModal value={positionData} getData={getPosition} />
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