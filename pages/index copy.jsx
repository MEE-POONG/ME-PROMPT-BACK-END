import Head from 'next/head';
import IndexPage from "components/layouts/IndexPage";
import ResultNumber from 'container/Dashboard/ResultNumber';
import PeakGraph from 'container/Dashboard/PeakGraph';
import RecentSalse from 'container/Dashboard/RecentSalse';
import NewListing from 'container/Dashboard/NewListing';
import { Card, Table } from 'react-bootstrap';
export default function HomePage() {
  let today = new Date(2022, 11, 0).getDate();
  const uniqueName = [];
  let work = [{ name: 'est', day: '1/15/2540', shift: 'ด' },
  { name: 'chun', day: '1/16/2540', shift: 'ช' },
  { name: 'chun', day: '1/15/2540', shift: 'บ' },
  { name: 'chun', day: '1/15/2540', shift: 'ด' }]
  const w = [
    {
      name: 'chun',
      duty: [{
        day: '1/16/2540', shift: 'ช'
      },{
        day: '1/16/2540', shift: 'บ'
      }]
    },
    {
      name: 'est',
      duty: [{
        day: '1/16/2540', shift: 'ช'
      },{
        day: '1/16/2540', shift: 'บ'
      }]
    }
  ]
  console.log(work.length);
  work.map(name => {
    if (uniqueName.indexOf(name.name) === -1) {
      uniqueName.push(name.name)
    }
  });
  console.log('uniqueName ', uniqueName);
  return (
    < >
      <Head>
        <title>HOME | dxx=</title>
        <meta
          name="description"
          content="I2AROBOT 2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Card className='m-2'>
          {/* <Table>
            <thead>
              <tr>
                <td>
                  ชื่อ
                </td>
                {[...Array(today).keys()].map((i) => (
                  <td>
                    {i + 1}
                  </td>

                ))}

              </tr>
            </thead>
            <tbody>
              {uniqueName?.map((name) => (
                <tr>
                  <td>
                    {name}
                  </td>
                  {[...Array(today).keys()].map((i) => (
                    <td>
                      <br />
                      {work?.filter(data => data.name === name && new Date(data.day).getDate() == (i + 1)).map((req) => (
                        <>
                          <span>
                            {req.shift}
                          </span>
                        </>
                      ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table> */}
        </Card>
        {/* <ResultNumber />
      <PeakGraph />
      <RecentSalse />
      <NewListing /> */}
      </div>

    </ >
  );
}
HomePage.layout = IndexPage;