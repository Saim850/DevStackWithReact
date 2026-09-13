import NavberLogo from '../assets/logo-text.png'

export default function Navber() {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0">
      <div className="md:ml-20 navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className='text-[#DB2777]'>Home</li>
              <li className='hover:text-[#DB2777]'>Technologies</li> 
              <li className='hover:text-[#DB2777]'>Projects</li>
              <li className='hover:text-[#DB2777]'>About</li>
              <li className='hover:text-[#DB2777]'>Contact</li>
          </ul>
        </div>

        <div className='w-full flex justify-end max-[425px]:mr-0 -mr-20 lg:justify-start'>
          <img src={NavberLogo} alt=""/>
        </div>

      </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5">
            <li className='text-[#DB2777]'>Home</li>
            <li className='hover:text-[#DB2777]'>Technologies</li> 
            <li className='hover:text-[#DB2777]'>Projects</li>
            <li className='hover:text-[#DB2777]'>About</li>
            <li className='hover:text-[#DB2777]'>Contact</li>
          </ul>
        </div>
        <div className="md:mr-20 navbar-end flex gap-4 text-[14px] font-medium">
          <button className='hover:cursor-pointer'>Sign In</button>
          <button className='bg-[#DB2777] text-white rounded-full px-4 py-2 hover:cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}
