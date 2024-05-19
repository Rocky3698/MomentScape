import { IoFastFood, IoCamera } from "react-icons/io5";
import { BsEmojiWinkFill } from "react-icons/bs";
import { FaAngrycreative, FaCat } from "react-icons/fa";
import { MdOutlineSportsVolleyball, MdOutlineEmojiNature } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import { GrTechnology } from "react-icons/gr";
const Categories = () => {
    return (
        <div className="flex flex-col gap-4 h-80 overflow-y-auto hide-scrollbar">
            <div className="flex items-center text-lg ms-2">
                <BsEmojiWinkFill className="me-2 text-red-400"></BsEmojiWinkFill>
                <NavLink to="/category" className={({ isActive }) => isActive ? ' hover:text-accent text-accent' : 'hover:text-accent'} >Comedy</NavLink>
            </div>
            <div className="flex items-center text-lg ms-2">
                <SiYoutubegaming className="me-2 text-blue-400"></SiYoutubegaming>
                <NavLink to="/category" className={({ isActive }) => isActive ? ' hover:text-accent text-accent' : 'hover:text-accent'} >Gaming</NavLink>
            </div>
            <div className="flex items-center text-lg ms-2">
                <IoFastFood className="me-2 text-[#d97706]"></IoFastFood>
                <NavLink to="/category" className={({ isActive }) => isActive ? ' hover:text-accent text-accent' : 'hover:text-accent'} >Food</NavLink>
            </div>
            <div className="flex items-center text-lg ms-2">
                <FaCat className="me-2 text-orange-500"></FaCat>
                <NavLink to="/category" className={({ isActive }) => isActive ? ' hover:text-accent text-accent' : 'hover:text-accent'} >Animals</NavLink>
            </div>
            <div className="flex items-center text-lg ms-2">
                <MdOutlineSportsVolleyball className="me-2 text-yellow-400"></MdOutlineSportsVolleyball>
                <NavLink to="/category" className={({ isActive }) => isActive ? ' hover:text-accent text-accent' : 'hover:text-accent'} >Sports</NavLink>
            </div>
            <div className="flex items-center text-lg ms-2">
                <FaAngrycreative className="me-2 text-accent"></FaAngrycreative>
                <NavLink to="/category" className={({ isActive }) => isActive ? ' hover:text-accent text-accent' : 'hover:text-accent'} >Creative</NavLink>
            </div>
            <div className="flex items-center text-lg ms-2">
                <MdOutlineEmojiNature className="me-2 text-green-500"></MdOutlineEmojiNature>
                <NavLink to="/category" className={({ isActive }) => isActive ? ' hover:text-accent text-accent' : 'hover:text-accent'} >Nature</NavLink>
            </div>
            <div className="flex items-center text-lg ms-2">
                <IoCamera className="me-2 text-sky-500"></IoCamera>
                <NavLink to="/category" className={({ isActive }) => isActive ? ' hover:text-accent text-accent' : 'hover:text-accent'} >Photography</NavLink>
            </div>
            <div className="flex items-center text-lg ms-2">
                <GrTechnology className="me-2"></GrTechnology>
                <NavLink to="/category" className={({ isActive }) => isActive ? ' hover:text-accent text-accent' : 'hover:text-accent'} >Technology</NavLink>
            </div>
        </div>
    );
};

export default Categories;