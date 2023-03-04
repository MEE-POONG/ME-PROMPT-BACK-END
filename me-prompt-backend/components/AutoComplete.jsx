import React, { useEffect, useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';

export default function AutoComplete({ id, label, placeholder, options, value, valueReturn, checkValue }) {
  const [filteredData, setFilteredData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const handleClose = () => setShowData(false);
  const handleShow = () => setShowData(true);

  useEffect(() => {
    if (value !== '') {
      setSelectValue(value);
    }
  }, []);
  useEffect(() => {
    filterData(options, value)
    valueReturn(selectValue);
  }, [selectValue]);

  function filterData(data, selectValue) {
    setFilteredData(data?.filter(item => item?.team.includes(selectValue)).slice(0, 6));
  }

  function handleInputChange(event) {
    handleShow(),
      setSelectValue(event.target.value);
  }
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Dropdown >
        <Dropdown.Toggle id="dropdown-custom-components" bsPrefix='p-0' className="w-100" >
          <Form.Control
            autoFocus
            autoComplete="off"
            placeholder={placeholder}
            onChange={handleInputChange}
            value={selectValue}
            isValid={checkValue === false && selectValue !== '' ? true : false}
            isInvalid={checkValue === false && selectValue === '' ? true : false}
          />
        </Dropdown.Toggle>
        <Dropdown.Menu show={showData && filteredData?.length > 0} className='w-100' onMouseOver={handleShow}>
          {filteredData?.map(item => (
            <Dropdown.Item key={item.id} onClick={() => { setShowData(false); setSelectValue(item.team) }}>
              {item.team}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}