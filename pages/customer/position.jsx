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
    // const [{ data: positionData, loading, error }, getPosition] = useAxios({ url: '/api/position' })

    // const { data, itemsPerPage } = props;
    // const [page, setPage] = React.useState(1);
    // const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        // getPosition({
        //     data: {
        //         page: page,
        //         pageSize: pageSize,
        //     }
        // }).then(() => {
        //     // setPositions(positionData);
        //     // CloseModal()
        // })
    }, []);

    // const handlePrevClick = () => {
    //     setPage(page - 1);
    // };

    // const handleNextClick = () => {
    //     setPage(page + 1);
    // };

    // const startIndex = (page - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const currentItems = data

    return (
        <div>
            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Manager</th>
                    </tr>
                </thead>
                <tbody> */}
            {/* {currentItems?.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.team}</td>
                            <td>{item.position}</td>
                            <td>
                                <PositionEditModal value={positionData} getData={getPosition} />
                                <PositionDeleteModal value={positionData} getData={getPosition} />
                            </td>
                        </tr>
                    ))} */}
            {/* </tbody>
            </Table> */}
            <div className='dcc-space-between'>
                {/* <Pagination className='mb-0'>
                    <Pagination.First onClick={handlePrevClick} disabled={page === 1} />
                    <Pagination.Prev />
                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last onClick={handleNextClick} disabled={page * itemsPerPage >= data?.length} />
                </Pagination>
                <Form.Select aria-label="10" bsPrefix='array-show'>
                    <option className='text-end' value="10" selected={pageSize === 10} onClick={() => { setPageSize(10) }}>10{" "}</option>
                    <option className='text-end' value="30" selected={pageSize === 30} onClick={() => { setPageSize(30) }}>30{" "}</option>
                    <option className='text-end' value="50" selected={pageSize === 50} onClick={() => { setPageSize(50) }}>50{" "}</option>
                    <option className='text-end' value="100" selected={pageSize === 100} onClick={() => { setPageSize(100) }}>100{" "}</option>
                    <option className='text-end' value="300" selected={pageSize === 300} onClick={() => { setPageSize(300) }}>300{" "}</option>
                    <option className='text-end' value="500" selected={pageSize === 500} onClick={() => { setPageSize(500) }}>500{" "}</option>
                    <option className='text-end' value="1000" selected={pageSize === 1000} onClick={() => { setPageSize(1000) }}>1000{" "}</option>
                </Form.Select> */}
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
