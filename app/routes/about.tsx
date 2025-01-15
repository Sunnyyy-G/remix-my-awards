import React from 'react';
import type { LinksFunction } from '@remix-run/node';
import  Developing from '~/components/common/Developing';
// import indexStyle from '~/style/about.css';
import '~/style/about.css';
import Watermark from '~/components/common/Watermark';

// export const links: LinksFunction = () => {
//   return [
//     {
//       rel: 'stylesheet',
//       href: indexStyle
//     }
//   ]
// }

const About:React.FC = () => {
  return <div className='g-container p-about'>
    <Developing />
  </div>;
}

export default About;
