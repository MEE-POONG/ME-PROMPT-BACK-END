import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Card, Button, Form, Image, InputGroup, Row, Col, Table, Pagination, Badge } from 'react-bootstrap'
import MyPagination from "@/components/Pagination"
import useAxios from 'axios-hooks'
import PageLoading from '@/components/PageChange/pageLoading'
import PageError from '@/components/PageChange/pageError'
import MemberAddModal from '@/container/Member/MemberAddModal'
import MemberEditModal from '@/container/Member/MemberEditModal'
import MemberDeleteModal from '@/container/Member/MemberDeleteModal'
import MemberPermissionModal from '@/container/Member/MemberPermissionModal'
import MemberViewModal from '@/container/Member/MemberViewModal'
function MyTable(props) {
    const [currentItems, setCurrentItems] = useState(props?.data);
    const [numberSet, setNumberSet] = useState(props?.setNum);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No.</th>
                    <th className='min-width'>IMG</th>
                    <th>FullName</th>
                    <th>Permission Type</th>
                    <th>Position</th>
                    <th>Social</th>
                    <th className='min-width'>Manager</th>
                </tr>
            </thead>
            <tbody>
                {currentItems.length ? (
                    currentItems?.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1 + numberSet}</td>
                            <td className='min-width'>
                                <Image src={item.img} alt={"Profile : " + item.firstname + " " + item.lastname} width="150px" height="150px" className='object-fit-cover' />
                            </td>
                            <td>
                                <h4>
                                    {item.firstname}{" "}{item.lastname}
                                </h4>
                            </td>
                            <td>
                                <h4>
                                    <Badge bg="primary">
                                        {item.statusManager}
                                    </Badge>
                                </h4>
                            </td>
                            <td>
                                <h4>
                                    <Badge bg="primary">
                                        {item.Position?.team}
                                    </Badge>
                                    <br />
                                    <Badge bg="success">
                                        {item.Position?.position}
                                    </Badge>
                                </h4>
                            </td>
                            <td>
                                <h4>

                                    <Badge bg="facebook">
                                        {item.facebook}
                                    </Badge>
                                    <br />
                                    <Badge bg="line">
                                        {item.line}
                                    </Badge>
                                    <br />
                                    <Badge bg="instagram">
                                        {item.instagram}
                                    </Badge>
                                </h4>
                            </td>
                            <td className='min-width'>
                                <MemberPermissionModal value={item} getData={props?.getData} />
                                <br />
                                <MemberViewModal value={item} getData={props?.getData} />
                                <br />
                                <MemberEditModal value={item} getData={props?.getData} />
                                <br />
                                <MemberDeleteModal value={item} getData={props?.getData} />
                            </td>
                        </tr>
                    )))
                    :
                    <tr>
                        <td>0</td>
                        <td>undefined</td>
                        <td>undefined</td>
                        <td>undefined</td>
                        <td>undefined</td>
                        <td>undefined</td>
                        <td>undefined</td>
                    </tr>}
            </tbody>
        </Table>
    );
}

export default function MemberPage() {
    const [params, setParams] = useState({
        page: '1',
        pageSize: '10'
    });

    const [{ data: memberData, loading, error }, getMember] = useAxios({ url: `/api/member?page=1&pageSize=10`, method: 'GET' });
    useEffect(() => {
        if (memberData) {
            setParams({
                ...params,
                page: memberData.page,
                pageSize: memberData.pageSize
            });
        }
    }, [memberData]);

    const handleSelectPage = (pageValue) => {
        getMember({ url: `/api/member?page=${pageValue}&pageSize=${params.pageSize}` })
    };
    const handleSelectPageSize = (sizeValue) => {
        getMember({ url: `/api/member?page=1&pageSize=${sizeValue}` })
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
                    <MemberAddModal getData={getMember} />
                </div>
                <MyTable data={memberData?.data} setNum={(memberData?.page * memberData?.pageSize) - memberData?.pageSize} getData={getMember} />
                <MyPagination page={memberData.page} totalPages={memberData.totalPage} onChangePage={handleSelectPage} pageSize={params.pageSize} onChangePageSize={handleSelectPageSize} />
            </Card >
        </Container >
    );
}
MemberPage.layout = IndexPage
