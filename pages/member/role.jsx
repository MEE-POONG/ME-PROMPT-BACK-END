import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Card, Button, Form, Image, InputGroup, Row, Col, Table, Pagination } from 'react-bootstrap'
import MyPagination from "@/components/Pagination"
import useAxios from 'axios-hooks'
import PageLoading from '@/components/PageChange/pageLoading'
import PageError from '@/components/PageChange/pageError'
import RoleAddModal from '@/container/Role/RoleAddModal'
import RoleEditModal from '@/container/Role/RoleEditModal'
import RoleDeleteModal from '@/container/Role/RoleDeleteModal'
function MyTable(props) {
    const [currentItems, setCurrentItems] = useState(props?.data);
    const [numberSet, setNumberSet] = useState(props?.setNum);
    useEffect(() => {
        setCurrentItems(currentItems);
    }, [props]);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ตำแหน่งผู้ดูแล</th>
                    <th>กำหนดสิทธิ</th>
                    <th>Manager</th>
                </tr>
            </thead>
            <tbody>
                {currentItems.length ? (
                    currentItems?.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1 + numberSet}</td>
                            <td>{item.role}</td>
                            <td>{item.role}</td>
                            <td>
                                {/* <RoleEditModal value={item} getData={props?.getData} /> */}
                                {/* <RoleDeleteModal value={item} getData={props?.getData} /> */}
                            </td>
                        </tr>
                    )))
                    : ""}
            </tbody>
        </Table>
    );
}

export default function RolePage() {
    const [params, setParams] = useState({
        page: '1',
        pageSize: '10'
    });

    const [{ data: roleData, loading, error }, getrole] = useAxios({ url: `/api/role?page=1&pageSize=10`, method: 'GET' });

    useEffect(() => {
        if (roleData) {
            setParams({
                ...params,
                page: roleData.page,
                pageSize: roleData.pageSize
            });
        }
    }, [roleData]);

    const handleSelectPage = (pageValue) => {
        getrole({ url: `/api/role?page=${pageValue}&pageSize=${params.pageSize}` })
    };
    const handleSelectPageSize = (sizeValue) => {
        getrole({ url: `/api/role?page=1&pageSize=${sizeValue}` })
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
                    <RoleAddModal getData={getrole}/>
                </div>
                <MyTable data={roleData?.data} setNum={(roleData?.page * roleData?.pageSize) - roleData?.pageSize} getData={getrole} />
                <MyPagination page={roleData.page} totalPages={roleData.totalPage} onChangePage={handleSelectPage} pageSize={params.pageSize} onChangePageSize={handleSelectPageSize} />
            </Card >
        </Container >
    );
}
RolePage.layout = IndexPage
