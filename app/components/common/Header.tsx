import { FC } from 'react';
import { NavLink } from '@remix-run/react';
import logo from '~/images/common/logo_bar.svg';

const Header: FC = () => {
  return (
    <header className='g-header'>
      <div className='g-header-inner'>
        <NavLink to='/' className='logo'>
          <img className='logo-img' src={logo} alt='logo' />
        </NavLink>
        <nav className='g-nav'>
          <ul className='g-nav-ul'>
            <li className='g-nav-li'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "g-nav-link active" : 'g-nav-link'
                }
                to='/'
              >
                Home
              </NavLink>  
            </li>
            <li className='g-nav-li'>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "g-nav-link active" : 'g-nav-link'
                  }
                  to='/certificates'
                >
                  Certificates
                </NavLink>
            </li>
            <li className='g-nav-li'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "g-nav-link active" : 'g-nav-link'
                }
                to='/about'
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;