import { Link } from 'react-scroll';

import logoOptiguard from '../assets/logo-optiguard.png'

export default function HeaderNav() {
  return (
    <header className='fixed bg-white w-full z-50'>
      <div className="container mx-auto px-4 sm:px-12 py-4 sm:py-5">
        <div className='flex justify-between items-center gap-4'>
          <div className='h-8 sm:h-10'>
            <img className='h-full w-full' src={logoOptiguard} alt='Optiguard' />
          </div>

          <div className='hidden md:flex gap-8 font-medium items-center'>
            <NavItem scrollTo="about-section">Tentang</NavItem>
            <NavItem scrollTo="feature-section">Aplikasi</NavItem>
            <NavItem scrollTo="">Adaptor</NavItem>
            <NavItem scrollTo="">Cara Penggunaan</NavItem>
          </div>

          <div className='block md:hidden gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>

        </div>
      </div>
    </header>
  )
}

function NavItem({ scrollTo, children }) {
  return (
    <Link 
      to={scrollTo}
      smooth={true}
      duration={500}
      className='font-medium transition-colors duration-300 hover:text-blue-500 hover:cursor-pointer'
    >{children}</Link>
  )
}