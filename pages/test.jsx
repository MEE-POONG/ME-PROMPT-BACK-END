import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import MyPagination from "@/components/Pagination"
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form'
export default function TestPage() {
  const [value, setValue] = useState('');
  const [showData, setShowData] = useState(false);
  const handleClose = () => setShowData(false);
  const handleShow = () => setShowData(true);
  return (
    <>
      <Dropdown onMouseOut={handleClose} onMouseOver={handleShow} >
        <Dropdown.Toggle id="dropdown-custom-components" bsPrefix='p-0'>
          <Form.Control
            autoFocus
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu show={showData} >
          <Dropdown.Item eventKey="1">Red</Dropdown.Item>
          <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Orange
          </Dropdown.Item>
          <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
TestPage.layout = IndexPage