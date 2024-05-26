import { Link, useNavigate } from 'react-router-dom';
import { LuSettings2, LuLogOut } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import axios_base from '../Axios/Axios_Base';
import { useState, useEffect } from 'react';
import { getUser } from '../../API/profile';
const Header = () => {
    const validUser = localStorage.getItem('isOkay');
    const [user, setUser] = useState({});
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
    useEffect(() => {
        const getUserdata = async () => {
            try {
                const data = await getUser();
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        };
        if (validUser) {
            getUserdata();
        }
    }, [validUser]);
    return (
        <div className=' border-b border-b-gray-300 sticky top-0 z-40 mb-5 '>
            <div className="navbar bg-white  justify-between w-5/6 mx-auto">
                <div >
                    <Link to='/' className="btn btn-ghost text-2xl text-red-500">
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
                        validUser ? <div className="items-center gap-5 flex text-xl text-accent ">
                            <IoMdNotifications></IoMdNotifications>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button"><img alt="profile" src={user.dp} className="rounded-full h-10 object-cover border-solid border-2 border-indigo-300 w-10" /></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                                    <li><Link to='/profile'>Profile</Link></li>
                                    <li><Link to='/profile'>My Posts</Link></li>
                                </ul>
                            </div>
                            
                            <LuSettings2 ></LuSettings2>
                            <div className='relative group flex items-center'>
                                <LuLogOut onClick={handleLogOut} className="cursor-pointer hover:text-red-400"></LuLogOut>
                                <small className="hidden absolute ml-6  text-xs text-red-400 group-hover:block">Logout</small>
                            </div>
                        </div> : <Link to='/registration' className='btn btn-outline'>Join Now</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;