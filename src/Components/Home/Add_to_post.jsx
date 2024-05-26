import { BiSolidCategoryAlt } from "react-icons/bi";
import { SiGoogledisplayandvideo360 } from 'react-icons/si';
import { FcAddImage } from "react-icons/fc";
import { useState } from 'react';
import PropTypes from 'prop-types';
const Add_to_post = ({ setImg }) => {
    const [photo, setPhoto] = useState(null);
    const Set_Photo = (e) => {
        console.log(e, photo);
        setPhoto(e)
    }
    return (
        <div className='flex justify-between mt-5 px-6 border-2 rounded-lg py-3 ps-2'>
            <input
                type="text"
                name="dp"
                placeholder="DP URL"
                onChange={(e) => setImg(e.target.value)}
                className="input input-bordered w-full"
            />
            <div className='text-3xl flex justify-between gap-3'>
                <div className='relative group flex items-center'>
                    <BiSolidCategoryAlt className="cursor-pointer text-accent"></BiSolidCategoryAlt>
                    <small className="hidden absolute -top-4 text-xs group-hover:block">Category</small>
                </div>
                <label htmlFor="file-upload" className="cursor-pointer flex items-center space-x-2">
                    <div className='relative group flex items-center'>
                        <FcAddImage className="cursor-pointer text-accent"></FcAddImage>
                        <small className="hidden absolute -top-4 text-xs group-hover:block">Photo</small>
                    </div>
                    <input id="file-upload" type="file" className="hidden" />
                </label>
                <label htmlFor="file-upload" className="cursor-pointer flex items-center space-x-2">
                    <div className='relative group flex items-center'>
                        <SiGoogledisplayandvideo360 className="cursor-pointer text-red-500"></SiGoogledisplayandvideo360>
                        <small className="hidden absolute -top-4 text-xs group-hover:block">Video</small>
                    </div>
                    <input onChange={Set_Photo} id="file-upload" type="file" className="hidden" />
                </label>
            </div>
        </div>
    );
};
Add_to_post.propTypes = {
    setImg: PropTypes.func,
};
export default Add_to_post;