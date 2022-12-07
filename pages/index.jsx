import Head from 'next/head';
import IndexPage from "components/layouts/IndexPage";
import { Card, Table } from 'react-bootstrap';
import Warn from 'container/home/warn';
export default function HomePage() {
  const contactData = [
    { id: '1', title: 'a', detail: 'แก้ฟิล title จาก มองบน เป็น มองบนฟ้าแก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipa', fristname: 'งง', lastname: 'งง', customerId: '1', contactID: '1', audienceRecordID: '', newsId: '', aboutID: '' },
    { id: '1', title: 'b', detail: 'แก้ฟิล price จาก 950 เป็น 99แก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipaแก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipaแก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipaแก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipa9', fristname: 'งง', lastname: 'งง', customerId: '1', workingsId: '', packagePriceId: '1', newsId: '', aboutID: '' },
    { id: '1', title: 'c', detail: 'แก้ฟิล facebookแก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipaแก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipaแก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipaแก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipaแก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipa จาก facebook.com/api เป็น facebook.com/ipa', fristname: 'งง', lastname: 'งง', customerId: '1', workingsId: '', packagePriceId: '', newsId: '', aboutID: '1' },
  ]
  const warnCheckEditLogData = [
    { id: '1', title: 'a', tagLink: 'news', detail: 'แก้ฟิล title จาก มองบน เป็น มองบนฟ้า', fristname: 'งง', lastname: 'งง', customerId: '1', workingsId: '1', packagePriceId: '', newsId: '', aboutID: '' },
    { id: '1', title: 'a', tagLink: 'about', detail: 'แก้ฟิล price จาก 950 เป็น 9999999999999999999999แก้ฟิล price จาก 950 เป็น 999999999999999999999999999', fristname: 'งง', lastname: 'งง', customerId: '1', workingsId: '', packagePriceId: '1', newsId: '', aboutID: '' },
    { id: '1', title: 'a', tagLink: 'customer', detail: 'แก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipa แก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipaแก้ฟิล facebook จาก facebook.com/api เป็น facebook.com/ipa', fristname: 'งง', lastname: 'งง', customerId: '1', workingsId: '', packagePriceId: '', newsId: '', aboutID: '1' },
  ]
  const warnAudienceRecordData = [
    { id: '1', title: 'ผู้เข้าชมเว็บประจำวัน 1 พ.ค. 2565', detail: '185' },
    { id: '1', title: 'ผู้เข้าชมเว็บประจำวัน 2 พ.ค. 2565', detail: '185' },
    { id: '1', title: 'ผู้เข้าชมเว็บประจำวัน 3 พ.ค. 2565', detail: '185' },
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
      <div className='home-page'>
        {/* {contactData?.map((list) => (
        ))} */}
        <Warn contactData={contactData} checkEditLogData={warnCheckEditLogData} audienceRecordData={warnAudienceRecordData} />
      </div>
    </ >
  );
}
HomePage.layout = IndexPage;