import Head from 'next/head';
import IndexPage from "components/layouts/IndexPage";
import { Card, Table } from 'react-bootstrap';
import Warn from 'container/home/warn';
export default function HomePage() {
  const contactData = [
    { id: '1', type: 'แก้ไข', detail: 'แก้ฟิล title จาก มองบน เป็น มองบนฟ้า', fristname: 'งง', lastname: 'งง', customerId: '1', contactID: '1', audienceRecordID: '', newsId: '', aboutID: '' },
    { id: '1', detail: 'แก้ฟิล price จาก 950 เป็น 999', fristname: 'งง', lastname: 'งง', customerId: '1', workingsId: '', packagePriceId: '1', newsId: '', aboutID: '' },
    { id: '1', detail: 'แก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipa', fristname: 'งง', lastname: 'งง', customerId: '1', workingsId: '', packagePriceId: '', newsId: '', aboutID: '1' },
  ]
  const warnCheckEditLogData = [
    { id: '1', detail: 'แก้ฟิล title จาก มองบน เป็น มองบนฟ้า', fristname: 'งง', lastname: 'งง', customerId: '1', workingsId: '1', packagePriceId: '', newsId: '', aboutID: '' },
    { id: '1', detail: 'แก้ฟิล price จาก 950 เป็น 999', fristname: 'งง', lastname: 'งง', customerId: '1', workingsId: '', packagePriceId: '1', newsId: '', aboutID: '' },
    { id: '1', detail: 'แก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipa', fristname: 'งง', lastname: 'งง', customerId: '1', workingsId: '', packagePriceId: '', newsId: '', aboutID: '1' },
  ]
  const warnAudienceRecordData = [
    { id: '1', detail: 'แก้ฟิล title จาก มองบน เป็น มองบนฟ้า', fristname: 'งง', lastname: 'งง', customerId: '1', workingsId: '1', packagePriceId: '', newsId: '', aboutID: '' },
    { id: '1', detail: 'แก้ฟิล price จาก 950 เป็น 999', fristname: 'งง', lastname: 'งง', customerId: '1', workingsId: '', packagePriceId: '1', newsId: '', aboutID: '' },
    { id: '1', detail: 'แก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipa', fristname: 'งง', lastname: 'งง', customerId: '1', workingsId: '', packagePriceId: '', newsId: '', aboutID: '1' },
  ]
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
        <Warn typeWarn={contactData} />
        <Warn typeWarn={warnCheckEditLogData} />
        <Warn typeWarn={warnAudienceRecordData} />
      </div>
    </ >
  );
}
HomePage.layout = IndexPage;