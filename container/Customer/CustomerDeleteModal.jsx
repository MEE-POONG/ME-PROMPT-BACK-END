import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import useAxios from 'axios-hooks'
import ModelLoading from '@/components/ModelChange/ModelLoading'
import ModelError from '@/components/ModelChange/ModelError'
export default function CustomerDeleteModal(props) {
    const [showCheck, setShowCheck] = useState(false);
    const handleShow = () => setShowCheck(true);
    const handleClose = () => setShowCheck(false);
    const [{ loading: deleteCustomerLoading, error: deleteCustomerError }, executeCustomerDelete] = useAxios({}, { manual: true })
    const handleDeleteData = () => {
        executeCustomerDelete({
            url: '/api/customer/' + props?.value?.id,
            method: 'DELETE',
        }).then(() => {
            Promise.all([
                props.getData(),
            ]).then(() => {
                if (deleteCustomerLoading?.success) {
                    handleClose()
                }
            })
        })
    }

    if (deleteCustomerLoading) return <ModelLoading showCheck={showCheck} />
    if (deleteCustomerError) return <ModalError show={showCheck} fnShow={handleClose} centered size='lg' />
    return (
        <>
            <Button bsPrefix='delete' className={showCheck ? 'icon active' : 'icon'} onClick={handleShow}>
                <FaTrash />
            </Button>
            <Modal show={showCheck} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center'>ลบข้อมูลสมาชิกบริษัท</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title>สมาชิก : <span className='text-danger'>{props?.value?.firstname}{' '}{props?.value?.lastname}</span></Modal.Title>
                    <Modal.Title>ตำแหน่งงาน : <span className='text-danger'>{props?.value?.Position?.team}</span> ตำแหน่งงาน : <span className='text-danger'>{props?.value?.Position?.position}</span></Modal.Title>
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