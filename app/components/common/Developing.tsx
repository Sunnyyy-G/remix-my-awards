import { FC } from 'react';
import type { LinksFunction } from '@remix-run/node';
// import indexStyle from '~/style/_developing.css';
import '~/style/_developing.css';

// export const links: LinksFunction = () => {
//   return [
//     {
//       rel: 'stylesheet',
//       href: indexStyle
//     }
//   ]
// }

const Developing: FC = () => {
  return (
    <div className='g-developing'>
      <i className='g-developing-icon' />
      <h3 className='g-developing-tit'>Features under development.<br />Please stay tuned, it will be open later.</h3>
      <p className='g-developing-txt'>功能正在开发中<br />敬请期待，后续持续开放</p>
    </div>
  )
}
export default Developing;