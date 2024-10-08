import logo from '../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function NavBar() {
    return (
        <div className=" text-white mb-10 flex justify-between md:text-2xl lg:text-2xl py-6 px-5">

            <div>
                <ul className="flex justify-between">
                    <li className="px-2">Home</li>
                    <li className="px-2">Home</li>
                    <li className="px-2">Home</li>
                    <li className="px-2">Home</li>
                    <li className="px-2">Home</li>
                </ul>
            </div>

            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-12" src={logo} alt="NavBar Logo" />
            </div>

            <div className='flex justify-center gap-2'>
                <FaGithub />
                <FaLinkedin />
            </div>
        </div>
    )
}

export default NavBar