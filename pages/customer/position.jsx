import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Card, Button, Form, Image, InputGroup, Row, Col, Table, Pagination } from 'react-bootstrap'
import useAxios from 'axios-hooks'
import PageLoading from '@/components/PageChange/pageLoading'
import PageError from '@/components/PageChange/pageError'
import PositionAddModal from '@/container/Position/PositionAddModal'
import PositionEditModal from '@/container/Position/PositionEditModal'
import PositionDeleteModal from '@/container/Position/PositionDeleteModal'
function MyTable(props) {
    const [{ data: positionData, loading, error }, getPosition] = useAxios({ url: '/api/position' })

    const { data, itemsPerPage } = props;
    const [page, setPage] = React.useState(1);

    const handlePrevClick = () => {
        setPage(page - 1);
    };

    const handleNextClick = () => {
        setPage(page + 1);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data?.slice(startIndex, endIndex);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems?.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.team}</td>
                            <td>{item.position}</td>
                            <td>
                                <PositionEditModal value={positionData} getData={getPosition} />
                                <PositionDeleteModal value={positionData} getData={getPosition} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className='dcc-space-between'>
                <Pagination className='mb-0'>
                    <Pagination.First onClick={handlePrevClick} disabled={page === 1} />
                    <Pagination.Prev />
                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last onClick={handleNextClick} disabled={page * itemsPerPage >= data?.length} />
                </Pagination>
                <Form.Control
                    type='number'
                    min={10}
                    max={100}
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </div>

        </div>
    );
}

export default function PositionPage() {
    const [{ data: positionData, loading, error }, getPosition] = useAxios({ url: '/api/position' })

    const itemsPerPage = 10;

    if (loading) return <PageLoading />
    if (error) return <PageError />
    return (
        <Container fluid className="pt-4 px-4">
            <Card className="bg-secondary text-center rounded shadow p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <Card.Title className="mb-0">
                        รายการสินค้า
                    </Card.Title>
                    <PositionAddModal getData={getPosition} />
                </div>
                <div className="table-responsive">
                    <MyTable data={positionData} itemsPerPage={itemsPerPage} />
                </div >
            </Card >
        </Container >
    );
}
PositionPage.layout = IndexPage
