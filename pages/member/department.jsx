import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Card, Button, Form, Image, InputGroup, Row, Col, Table, Pagination } from 'react-bootstrap'
import MyPagination from "@/components/Pagination"
import useAxios from 'axios-hooks'
import PageLoading from '@/components/PageChange/pageLoading'
import PageError from '@/components/PageChange/pageError'
import DepartmentAddModal from '@/container/Department/DepartmentAddModal'
import DepartmentEditModal from '@/container/Department/DepartmentEditModal'
import DepartmentDeleteModal from '@/container/Department/DepartmentDeleteModal'
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
                    <th>Team</th>
                    <th>Department</th>
                    <th>Manager</th>
                </tr>
            </thead>
            <tbody>
                {currentItems.length ? (
                    currentItems?.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1 + numberSet}</td>
                            <td>{item.team}</td>
                            <td>{item.department}</td>
                            <td>
                                <DepartmentEditModal value={item} getData={props?.getData} />
                                <DepartmentDeleteModal value={item} getData={props?.getData} />
                            </td>
                        </tr>
                    )))
                    : <tr>
                        <td>0</td>
                        <td>Null</td>
                        <td>Null</td>
                        <td>Null</td>
                    </tr>
                }
            </tbody>
        </Table>
    );
}

export default function DepartmentPage() {
    const [params, setParams] = useState({
        page: '1',
        pageSize: '10'
    });

    const [{ data: departmentData, loading, error }, getDepartment] = useAxios({ url: `/api/department?page=1&pageSize=10`, method: 'GET' });

    useEffect(() => {
        if (departmentData) {
            setParams({
                ...params,
                page: departmentData.page,
                pageSize: departmentData.pageSize
            });
        }
    }, [departmentData]);

    const handleSelectPage = (pageValue) => {
        getDepartment({ url: `/api/department?page=${pageValue}&pageSize=${params.pageSize}` })
    };
    const handleSelectPageSize = (sizeValue) => {
        getDepartment({ url: `/api/department?page=1&pageSize=${sizeValue}` })
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
                        แผนกงาน
                    </Card.Title>
                    <DepartmentAddModal/>
                </div>
                <MyTable data={departmentData?.data} setNum={(departmentData?.page * departmentData?.pageSize) - departmentData?.pageSize} getData={getDepartment} />
                <MyPagination page={departmentData.page} totalPages={departmentData.totalPage} onChangePage={handleSelectPage} pageSize={params.pageSize} onChangePageSize={handleSelectPageSize} />
            </Card >
        </Container >
    );
}
DepartmentPage.layout = IndexPage
