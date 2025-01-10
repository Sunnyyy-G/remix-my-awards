import { FC } from 'react';
const Footer: FC = () => {
  const dateYear = new Date().getFullYear();
  return (
    <footer className='g-footer'>
      <div className='g-footer-main'>
        <span className='logo'></span>
        <ul className='footer-contact'>
          <li className='footer-contact-item'>
            <span></span>
            <span></span>
          </li>
        </ul>
      </div>
      <p className='fonter-copyright'>Copyright © {dateYear} Sunnyyy17-Ligen 版权所有</p>
    </footer>
  )
}
export default Footer;