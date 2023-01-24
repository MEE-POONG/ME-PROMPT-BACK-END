import React, { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

const data = [
    {
        "id": "63bd223b7063b8b02aeb959e",
        "team": "Dev",
        "position": "วิเคราะห์เว็บ"
    },
    {
        "id": "63bd22557063b8b02aeb959f",
        "team": "Dev",
        "position": "เขียนเว็บ"
    },
    {
        "id": "63bd227f7063b8b02aeb95a2",
        "team": "Marketing",
        "position": "วิเคราะห์ตลาด"
    },
    {
        "id": "63be2a96f65d8b4656b19f79",
        "team": "Devs",
        "position": "sss"
    },
    {
        "id": "63be2a9ff65d8b4656b19f7a",
        "team": "aaaaa",
        "position": "ddd"
    },
    {
        "id": "63be923df65d8b4656b19fa0",
        "team": "aaa",
        "position": "aaa"
    },
    {
        "id": "63be9242f65d8b4656b19fa1",
        "team": "aa",
        "position": "aa"
    },
    {
        "id": "63be9246f65d8b4656b19fa2",
        "team": "a",
        "position": "a"
    }
];

function TestPage() {
    const [positionSelect, setPositionSelect] = useState([]);
    useEffect(() => {
        setPositionSelect(data[0])
        console.log(" 51 : ",positionSelect.position);
    }, [])

    return (
        <div className="TestPage">
            <Typeahead
                id="team-typeahead"
                labelKey="team"
                options={data}
                placeholder="Search for a team..."
                onChange={(positionSelect) => setPositionSelect(positionSelect)}
                defaultInputValue={positionSelect?.position}
            />
            {positionSelect.length > 0 && (
                <div>
                    You positionSelect:
                    <ul>
                        {positionSelect.map((item) => (
                            <li key={item.id}>{item.team}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default TestPage;