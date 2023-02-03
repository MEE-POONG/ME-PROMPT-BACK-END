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
  const InputToggle = React.forwardRef(({ onClick }, ref) => (

    <Form.Control ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      id='value-position'
      autoFocus
      autoComplete="off"
    />

  ));
  return (
    <>
      <Dropdown>
        <Form.Control 
          id='value-position'
          autoFocus
          autoComplete="off"
        />
        <Dropdown.Menu  >
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