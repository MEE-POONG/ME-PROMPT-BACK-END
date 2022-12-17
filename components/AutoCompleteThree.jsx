import React, { useEffect, useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';

export default function AutoCompleteThree(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [selectTeam, setSelectTeam] = useState('');
  const handleClose = () => setShowData(false);
  const handleShow = () => setShowData(true);
  const positionData = [
    { id: '1', team: 'a', position: 'aa' },
    { id: '2', team: 'a', position: 'bb' },
    { id: '3', team: 'b', position: 'cc' },
    { id: '4', team: 'b', position: 'dd' },
  ];
  useEffect(() => {
    setFilteredData(filterData(positionData, selectTeam));
  }, [selectTeam]);
  useEffect(() => {
  }, [filteredData]);

  function filterData(data, selectTeam) {
    return data.filter(item => item.team.includes(selectTeam));
  }

  function handleSearchChange(event) {
    setSelectTeam(event.target.value);
  }

  return (
    <>
      <Form.Group className="mb-3 position-relative" controlId="formBasicEmail" onMouseOut={handleClose}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type="email" placeholder={props.placeholder} value={selectTeam} onChange={handleSearchChange} autoComplete="off" onMouseOver={handleShow} />
        <Dropdown.Menu show={showData && filteredData.length} className='w-100' onMouseOver={handleShow}>
          {filteredData.map(item => (
            <Dropdown.Item key={item.id} onClick={() => { setShowData(false); setselected(item.team) }}>
              {item.team}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Form.Group>

      {/* <Dropdown.Menu show className='w-100' onMouseOver={() => { setShow(true) }}>
        {filteredData?.map((value, index) => (
          <Dropdown.Item key={index} onClick={() => { setShow(false); setselected(value.team) }} eventKey="2">
            {value.team}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu> */}
      {/* <table>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.team}</td>
              <td>{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

    </>
  );
}