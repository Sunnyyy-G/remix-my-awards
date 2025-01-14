import React from 'react';
import type { LinksFunction } from '@remix-run/node';
import indexStyle from '~/style/index.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: indexStyle
    }
  ]
}

export default function Index() {
  return (
    <p id="index-page" className='g-container p-index'>
      Under development.
      <br />
      Please stay tuned.
    </p>
  );
}
