import React, { useEffect, useState } from 'react'
import queryString from 'query-string';
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Card, Button, Form, Image, InputGroup, Row, Col, Table, Pagination } from 'react-bootstrap'
import useAxios from 'axios-hooks'
import PageLoading from '@/components/PageChange/pageLoading'
import PageError from '@/components/PageChange/pageError'
import PositionAddModal from '@/container/Position/PositionAddModal'
import PositionEditModal from '@/container/Position/PositionEditModal'
import PositionDeleteModal from '@/container/Position/PositionDeleteModal'
function MyTable(props) {
    const [currentItems, setCurrentItems] = useState(props?.data);
    useEffect(() => {
        setCurrentItems(currentItems);
    }, [props]);



    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Manager</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.length ? (
                        currentItems?.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.team}</td>
                                <td>{item.position}</td>
                                <td>
                                    <PositionEditModal value={item} getData={props?.getData} />
                                    <PositionDeleteModal value={item} getData={props?.getData} />
                                </td>
                            </tr>
                        )))
                        : ""}
                </tbody>
            </Table>


        </div>
    );
}

export default function PositionPage() {
    const [params, setParams] = useState({
        page: '1',
        pageSize: '10'
    });

    const [{ data: positionData, loading, error }, getPosition] = useAxios({ url: `/api/position?page=${params.page}&pageSize=${params.pageSize}`, method: 'GET' });

    // useEffect(() => {
    //     getPosition({ url: url, method: 'GET' }).then(() => {
    //         // CloseModal()
    //         console.log(positionData);
    //     })
    // }, [params]);

    const handlePrevClick = () => {
        setParams({
            ...params,
            page: params.page - 1
        });
    };

    const handleNextClick = () => {
        setParams({
            ...params,
            page: params.page + 1
        });
    };
    const handleSelectPage = (val) => {
        setParams({
            ...params,
            page: val
        });
    };
    const handlePageSize = (event) => {
        setParams({
            ...params,
            pageSize: event.target.value
        });
    };

    if (loading) {
        return <PageLoading />;
    }
    if (error) {
        return <PageError />;
    }
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
                    <MyTable data={positionData?.data} />
                    <div className='dcc-space-between'>
                        <Pagination className='mb-0'>
                            <Pagination.First />
                            <Pagination.Prev onClick={handlePrevClick} disabled={params.page === 1} />
                            {[...Array(positionData.totolPage).keys()].map((i) => {
                                const page = i + 1
                                return (
                                    <Pagination.Item key={i} onClick={() => { getPosition({ url: `/api/position?page=${page}&pageSize=${params.pageSize}` }) }}>{page}</Pagination.Item>
                                )
                            })}
                            <Pagination.Next onClick={handleNextClick} disabled={params.page * params.pageSize >= positionData?.data?.length} />
                            <Pagination.Last />
                        </Pagination>
                        <Form.Select aria-label="10" bsPrefix='array-show' value={params.pageSize}>
                            <option className='text-end' defaultValue>10</option>
                            <option className='text-end'>30</option>
                            <option className='text-end'>50</option>
                            <option className='text-end'>100</option>
                            <option className='text-end'>300</option>
                            <option className='text-end'>500</option>
                            <option className='text-end'>1000</option>
                        </Form.Select>
                    </div>
                </div >
            </Card >
        </Container >
    );
}
PositionPage.layout = IndexPage
