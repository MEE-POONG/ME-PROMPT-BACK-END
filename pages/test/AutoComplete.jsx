import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Typeahead } from 'react-bootstrap-typeahead';
import Form from 'react-bootstrap/Form'
import useAxios from 'axios-hooks';
export default function TestPage() {
  const [{ data: positionSearch, loading, error }, getpositionSearch] = useAxios({ url: '/api/position/position' })

  const [options, setOptions] = useState([
    { id: '', team: 'ไม่พบ', position: 'ไม่พบ' },
  ]);
  const [positionSelect, setPositionSelect] = useState([]);
  useEffect(() => {
    if (positionSearch) setOptions(positionSearch);
  }, [positionSearch])

  return (
    <>

      <Form.Group>
        <Form.Label>Single Selection</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="position"
          onChange={setPositionSelect}
          options={options}
          placeholder="Choose a state..."
          selected={positionSelect}
        />
      </Form.Group>
    </>
  );
}
TestPage.layout = IndexPage