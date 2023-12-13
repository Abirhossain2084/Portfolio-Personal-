
import { Link } from "react-router-dom";



const NavBar = () => {


 
  const NavItems = <>

    <Link to='/'><li><a>Home</a></li></Link>
    <Link to='/projects'><li><a>Projects</a></li></Link>
    <Link to='/about'><li><a>About me</a></li></Link>
    <Link to='/contactsection' smooth={true} duration={500} className="contactsection"><li><a>Contact</a></li></Link>
    <Link to='/resume'><li><a>Resume</a></li></Link>




  </>
  return (
    <div>
      <div className="navbar fixed z-10 bg-gray-400 bg-opacity-50  text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              {
                NavItems
              }
            </ul>
          </div>
       
          <img 
          className="w-52 h-full"
          src="https://i.ibb.co/PYhF4bN/Pink-Typography-Initial-AP-Logo-1-removebg-preview.png" alt="" />
       
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  font-bold ">
            {
              NavItems
            }
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="h-10 border rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/C92q4TZ/80676294-1034651610212241-1003760245354266624-n-removebg-preview.png" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge"></span>
                </a>
              </li>
              
            </ul>
          </div>




        </div>
      </div>
    </div>
  );
};

export default NavBar;