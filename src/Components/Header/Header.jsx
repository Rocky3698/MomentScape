import { Link, useNavigate } from 'react-router-dom';
import { LuSettings2, LuLogOut } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import axios_base from '../Axios/Axios_Base';
const Header = () => {
    const validUser= localStorage.getItem('isOkay');
    const navigate = useNavigate();
    const handleLogOut = () => {
        const token = localStorage.getItem("token");
        axios_base.get('/user/logout/ ', {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            console.log(response.data);
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            localStorage.removeItem("isOkay");
            navigate('/login');
        })
        .catch((error) => {
            console.error('There was an error logging out!', error);
        });
    };

    return (
        <div className=' border-b border-b-gray-300 sticky top-0 z-40 mb-5 '>
            <div className="navbar bg-white  justify-between w-5/6 mx-auto">
                <div >
                    <Link className="btn btn-ghost text-2xl text-red-500">
                        <figure><img className='w-10' src="image.png" alt="" /></figure>
                        MomentScape
                    </Link>
                </div>
                <div className="hidden lg:flex">

                    <label className="border-2 border-solid py-[10px] px-2 rounded-md flex items-center gap-2 w-96 group">
                        <input type="text" className="grow outline-none focus:outline-none " placeholder="Search accounts..." />
                        <FaSearch className='group-hover:text-accent'></FaSearch>
                    </label>
                </div>
                <div>
                    {
                        validUser?<div className="items-center gap-5 flex text-xl text-accent ">
                        <IoMdNotifications></IoMdNotifications>
                        <img alt="profile" className="rounded-full border-accent border-solid border-2 w-10" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        <LuSettings2 ></LuSettings2>
                        <div className='relative group flex items-center'>
                            <LuLogOut onClick={handleLogOut} className="cursor-pointer hover:text-red-400"></LuLogOut>
                            <small className="hidden absolute ml-6  text-xs text-red-400 group-hover:block">Logout</small>
                        </div>
                    </div>:<Link to='/registration' className='btn btn-outline'>Join Now</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;