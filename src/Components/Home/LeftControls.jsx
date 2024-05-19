import { AiFillHome } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { NavLink, Link } from 'react-router-dom';
import { FcMindMap } from "react-icons/fc";
import Post_Modal from "./Post_Modal";
import Categories from "./Categories";
import Footer from "./Footer";
const LeftControls = () => {
    // const NavLinks = <>
    //     <li><NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 text-indigo-500 pb-3' : 'text-slate-500'} to="/login">Login</NavLink></li>
    //     <li><NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 text-indigo-500 pb-3' : 'text-slate-500'} to="/registration">Registration</NavLink></li>
    //     <li><NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 text-indigo-500 pb-3' : 'text-slate-500'} to="/dashboard">Dashboard</NavLink></li>
    // </>;
    const loggedIn = localStorage.getItem('isOkay');
    return (
        <div>
            <div className="flex flex-col gap-4">
                <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 hover:text-accent text-accent' : 'text-slate-500 hover:text-accent'} to="/posts"><div className="flex items-center text-lg"> <AiFillHome className="me-2"></AiFillHome> For You</div> </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 hover:text-accent text-accent' : 'text-slate-500 hover:text-accent'} to="/posts/followers"><div className="flex items-center text-lg"> <IoPeopleSharp className="me-2"></IoPeopleSharp> Following</div> </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 hover:text-accent text-accent' : 'text-slate-500 hover:text-accent'} to="/videos"><div className="flex items-center text-lg"> <SiGoogledisplayandvideo360 className="me-2"></SiGoogledisplayandvideo360> Videos</div> </NavLink>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div>
                {
                    loggedIn ?
                        <div className="my-5 ">
                            <h2 className=" text-pretty text-slate-500">What&apos;s on your mind, Rocky? </h2>
                            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn btn-outline btn-accent w-full mt-3 text-lg"> <FcMindMap></FcMindMap> Creat post</button>
                            <Post_Modal></Post_Modal>
                        </div> :
                        <div className="my-5">
                            <h2 className=" text-pretty text-slate-500">Log in to follow creators, like post and view comments</h2>
                            <Link to='/login' className="btn btn-outline btn-accent w-full mt-3"> <LuLogIn></LuLogIn> Log in</Link>
                        </div>
                }
            </div>
            <hr className="border-t border-gray-200 my-7" />
            <p>Popular topics</p>
            <Categories></Categories>
            <hr className="border-t border-gray-200 my-7" />
            <Footer></Footer>
        </div>
    );
};

export default LeftControls;