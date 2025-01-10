import { FC } from 'react';
import logo from '~/images/common/logo_bar.svg';

const Header: FC = () => {
  return (
    <header className='g-header'>
      <div className='g-header-inner'>
        <span className='logo'>
          <img className='logo-img' src={logo} alt='logo' />
        </span>
        <nav></nav>
      </div>
    </header>
  )
}

export default Header;