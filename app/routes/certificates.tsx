import React from 'react';
import type { LinksFunction } from '@remix-run/node';
import { Card } from 'antd';
import indexStyle from '~/style/certificates.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: indexStyle
    }
  ]
}

const Certificates:React.FC = () => {
  const { Meta } = Card;

  return <div className='g-container p-certificates'>
    <h2 className='g-h2'>
      <i className='icon-certificate' />
      <b className='g-h2-name'>My Certificates</b>
      <span className='g-h2-name-cn'>我的证书</span>
    </h2>
    <div className='certificate-list'>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  </div>
}

export default Certificates;
{/*
export default function Certificates() {
  return <div className='g-container p-certificates'>
    <h2 className='g-h2'>
      <i className='icon-certificate' />
      <b className='g-h2-name'>My Certificates</b>
      <span className='g-h2-name-cn'>我的证书</span>
    </h2>
  </div>;
}
*/}

