import React, { useEffect, useState } from 'react'
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col, Table } from 'react-bootstrap'
import { FaEdit, FaEye, FaPlus, FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'

export default function PageLoading() {

    return (
        <>
            <Container fluid className="p-4 page-change mb-4">
                <div className="bg-secondary text-center rounded shadow p-4">
                    <div className="pencil">
                        <div className="pencil__ball-point"></div>
                        <div className="pencil__cap"></div>
                        <div className="pencil__cap-base"></div>
                        <div className="pencil__middle"></div>
                        <div className="pencil__eraser"></div>
                    </div>
                    <div className="line" />
                    <h2>Page Loading...Please Wait</h2>
                </div>
            </Container>


        </>
    )
}
