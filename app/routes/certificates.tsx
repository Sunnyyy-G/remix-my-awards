import React from 'react';
import type { LinksFunction } from '@remix-run/node';
import indexStyle from '~/style/certificates.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: indexStyle
    }
  ]
}
export default function Certificates() {
  return <div className='g-container p-certificates'>
    <h2 className='g-h2'>
      <i className='icon-certificate' />
      <b className='g-h2-name'>My Certificates</b>
      <span className='g-h2-name-cn'>我的证书</span>
    </h2>
  </div>;
}