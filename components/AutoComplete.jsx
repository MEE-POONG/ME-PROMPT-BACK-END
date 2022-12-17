import React, { useEffect, useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';

export default function AutoCompleteThree(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [selectTeam, setSelectTeam] = useState('');
  const handleClose = () => setShowData(false);
  const handleShow = () => setShowData(true);

  useEffect(() => {
    setFilteredData(filterData(props.options, selectTeam));
  }, [selectTeam]);

  useEffect(() => {
    if (selectTeam !== '') {
      props.value(selectTeam)
    }
  }, [selectTeam]);

  function filterData(data, selectTeam) {
    return data.filter(item => item.team.includes(selectTeam));
  }


  return (
    <>
      <Form.Group className="mb-3 position-relative" controlId="formBasicEmail" onMouseOut={handleClose}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type="email" placeholder={props.placeholder} value={selectTeam} onChange={() => setSelectTeam(event.target.value)} autoComplete="off" onMouseOver={handleShow} />
        <Dropdown.Menu show={showData && filteredData.length} className='w-100' onMouseOver={handleShow}>
          {filteredData.map(item => (
            <Dropdown.Item key={item.id} onClick={() => { setShowData(false); setSelectTeam(item.team) }}>
              {item.team}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Form.Group>
    </>
  );
}