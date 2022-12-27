import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Card, Button, Form, Image, InputGroup, Row, Col, Table, Pagination } from 'react-bootstrap'
import MyPagination from "@/components/Pagination"
import useAxios from 'axios-hooks'
import PageLoading from '@/components/PageChange/pageLoading'
import PageError from '@/components/PageChange/pageError'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
// import CustomerAddModal from '@/container/Customer/CustomerAddModal'
// import CustomerEditModal from '@/container/Customer/CustomerEditModal'
// import CustomerDeleteModal from '@/container/Customer/CustomerDeleteModal'
function MyTable(props) {
    const [currentItems, setCurrentItems] = useState(props?.data);
    const [numberSet, setNumberSet] = useState(props?.setNum);
    useEffect(() => {
        console.log(currentItems);
        setCurrentItems(currentItems);
    }, [props]);

    return (
        <div>
            <Table striped bordered hover>
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
                    {currentItems?.map((item, index) => (
                        <tr key={index}>
                            <td>
                                {index + 1}.
                            </td>
                            <td>
                                <Image className="rounded" src={item?.img} alt="" style={{ width: "100px", height: "100px" }} />
                            </td>
                            <td>
                                {item.firstname}{" "}{item.lastname}
                            </td>
                            <td>
                                {item.status}
                            </td>
                            <td>
                                {item.Position.team}
                                <br />
                                {item.Position.customer}
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
    );
}

export default function CustomerPage() {
    const [params, setParams] = useState({
        page: '1',
        pageSize: '10'
    });

    const [{ data: customerData, loading, error }, getCustomer] = useAxios();

    useEffect(() => {
        if (customerData) {
            setParams({
                ...params,
                page: customerData.page,
                pageSize: customerData.pageSize
            });
        }

    }, [customerData]);

    const handleSelectPage = (pageValue) => {
        getCustomer({ url: `/api/customer?page=${pageValue}&pageSize=${params.pageSize}` })
    };
    const handleSelectPageSize = (sizeValue) => {
        getCustomer({ url: `/api/customer?page=1&pageSize=${sizeValue}` })
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
                    {/* <CustomerAddModal getData={getCustomer} /> */}
                </div>
                <div className="table-responsive">
                    <MyTable data={customerData?.data} setNum={(customerData?.page * customerData?.pageSize) - customerData?.pageSize} />
                    <div className='dcc-space-between'>
                        <MyPagination page={customerData.page} totalPages={customerData.totalPage} onChangePage={handleSelectPage} pageSize={params.pageSize} onChangePageSize={handleSelectPageSize} />
                    </div>
                </div >
            </Card >
        </Container >
    );
}
CustomerPage.layout = IndexPage
