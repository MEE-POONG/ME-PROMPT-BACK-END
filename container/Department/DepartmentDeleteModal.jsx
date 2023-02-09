import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import ModelLoading from '@/components/ModelChange/ModelLoading'
import ModelError from '@/components/ModelChange/ModelError'
export default function DepartmentDeleteModal(props) {
    const [showCheck, setShowCheck] = useState(false);
    const handleShow = () => setShowCheck(true);
    const handleClose = () => setShowCheck(false);
    const [{ loading: deleteDepartmentLoading, error: deleteDepartmentError }, executeDepartmentDelete] = useAxios({}, { manual: true })
    const handleDeleteData = () => {
        executeDepartmentDelete({
            url: '/api/department/' + props?.value?.id,
            method: 'DELETE',
        }).then(() => {
            Promise.all([
                props.getData(),
            ]).then(() => {
                if (deleteDepartmentLoading?.success) {
                    handleClose()
                }
            })
        })
    }

    if (deleteDepartmentLoading) return <ModelLoading showCheck={showCheck} />
    if (deleteDepartmentError) return <ModalError show={showCheck} fnShow={handleClose} centered size='lg' />
    return (
        <>
            <Button bsPrefix='delete' className={showCheck ? 'icon active' : 'icon'} onClick={handleShow}>
                <FaTrash />
            </Button>
            <Modal show={showCheck} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>ลบรายการทีมและตำแหน่ง</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title>ทีม : <span className='text-danger'> {props?.value?.team}</span></Modal.Title>
                    <Modal.Title>ตำแหน่งงาน : <span className='text-danger'>{props?.value?.department}</span></Modal.Title>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsPrefix="cancel" className='my-0' onClick={handleClose}>
                        ยกเลิก
                    </Button>
                    <Button bsPrefix="succeed" className='my-0' onClick={handleDeleteData}>
                        ยืนยันการลบ
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}