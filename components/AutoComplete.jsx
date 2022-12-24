import React, { useEffect, useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';

export default function AutoComplete(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const handleClose = () => setShowData(false);
  const handleShow = () => setShowData(true);

  useEffect(() => {
    if (props) {
      setSelectValue(props?.defaultValue);
    }
  }, []);
  useEffect(() => {
    setFilteredData(filterData(props?.options, selectValue).slice(0, 6));
    props?.value(selectValue);
  }, [selectValue]);

  function filterData(data, selectValue) {
    return data.filter(item => item.team.includes(selectValue));
  }

  function handleInputChange(event) {
    setSelectValue(event.target.value);
  }
  return (
    <>

      <Form.Group className="mb-3 position-relative" controlId="formBasicEmail" onMouseOut={handleClose}>
        <Form.Label>{props?.label}</Form.Label>
        <Form.Control type="text" placeholder={props?.placeholder}
          value={selectValue}
          autoComplete="off"
          onChange={handleInputChange}
          onMouseOver={handleShow}
          isValid={props?.checkValue === false && selectValue !== '' ? true : false}
          isInvalid={props?.checkValue === false && selectValue === '' ? true : false}
        />
        <Dropdown.Menu show={showData && filteredData.length} className='w-100' onMouseOver={handleShow}>
          {filteredData.map(item => (
            <Dropdown.Item key={item.id} onClick={() => { setShowData(false); setSelectValue(item.team) }}>
              {item.team}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Form.Group>
    </>
  );
}