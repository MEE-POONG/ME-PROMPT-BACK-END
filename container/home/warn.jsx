import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container, Image, Card, Row, Col } from 'react-bootstrap';
import { FaChartArea, FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa';

export default function Warn(props) {
    console.log("props : ", props);
    const [contactList, setContactList] = useState(props.contactData);
    const [warnCheckEditLogList, setWarnCheckEditLogList] = useState(props.checkEditLogData);
    const [warnAudienceRecordList, setWarnAudienceRecordList] = useState(props.audienceRecordData);
    // useEffect(() => {
    //     first

    //     return () => {
    //         second
    //     }
    // }, [contactList, warnCheckEditLogList, warnAudienceRecordList])

    return (
        <Row className='warn mx-4 mt-4'>
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title className='text-center'>
                            ติดต่อเรา
                        </Card.Title>
                    </Card.Header>
                    {contactList?.map((list, key) => (
                        <Card.Body key={key}>
                            <Link href={"/contact/" + list.id}>
                                <a>
                                    <Card.Title>{list.title}</Card.Title>
                                    <Card.Text>{list.detail}</Card.Text>
                                </a>
                            </Link>
                        </Card.Body>
                    ))}
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title className='text-center'>
                            แก้ไขเปลี่ยนแปลงข้อมูล
                        </Card.Title>
                    </Card.Header>
                    {warnCheckEditLogList?.map((list, key) => (
                        <Card.Body key={key}>
                            <Link href={"/" + list.tagLink + "/" + list.id}>
                                <a>
                                    <Card.Title>{list.title}</Card.Title>
                                    <Card.Text>{list.detail}</Card.Text>
                                </a>
                            </Link>
                        </Card.Body>
                    ))}
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title className='text-center'>
                            รายงานการเข้าชมเว็บ
                        </Card.Title>
                    </Card.Header>
                    {warnAudienceRecordList?.map((list, key) => (
                        <Card.Body key={key}>
                            <Link href={"/" + list.tagLink + "/" + list.id}>
                                <a>
                                    <Card.Title>{list.title}</Card.Title>
                                    <Card.Text>{list.detail}  คน</Card.Text>
                                </a>
                            </Link>
                        </Card.Body>
                    ))}
                </Card>
            </Col>
        </Row>

    );
}
