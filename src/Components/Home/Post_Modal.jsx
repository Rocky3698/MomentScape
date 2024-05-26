import { useState } from 'react';
import { Link } from 'react-router-dom';
import Add_to_post from './Add_to_post';
import axios_base from '../Axios/Axios_Base';

const Post_Modal = () => {
    const [content, setContent] = useState('');
    const [privacyStatus, setPrivacyStatus] = useState('Public');
    const [img,setimg] = useState(null)
    // const [category, setCategory] = useState(2); // Assuming category 2 is the default category

    const handleSubmit = async () => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user_id");

        const data = {
            author: user,
            image_url: img,  
            video_url: "", 
            privacy_status: privacyStatus.toLowerCase(),
            content,
            category: 1
        };
        console.log(data);
        try {
            const response = await axios_base.post('/post/posts/', data, {
                headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json"
                }
            });
            if(response.status == 201){
                setContent('');
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <dialog id="my_modal_2" className="modal -top-20">
            <div className="modal-box w-1/4 max-w-5xl ">
                <h2 className="w-28 mx-auto">Create Post</h2>
                <hr className="border-t border-gray-200 my-4" />
                <div className="flex items-center gap-2">
                    <img alt="profile" className="rounded-full border-accent border-solid border-2 w-10" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    <div className='flex flex-col gap-0'>
                        <Link to="/" className='hover:text-blue-400 hover:underline underline-offset-4 block'>Rocky20809</Link>
                        <select
                            value={privacyStatus}
                            onChange={(e) => setPrivacyStatus(e.target.value)}
                            className="select select-xs text-indigo-400 select-ghost w-20 outline-none focus:outline-none rounded-md border-0 m-0 p-0">
                            <option className='text-accent'>Public</option>
                            <option className='text-accent'>Private</option>
                            <option className='text-accent'>Only Me</option>
                        </select>
                    </div>
                </div>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="textarea textarea-ghost textarea-lg w-full mt-5"
                    placeholder="What's on your mind, Rocky?"></textarea>
                <Add_to_post setImg={setimg} ></Add_to_post>
                <button onClick={handleSubmit} className='btn mt-4 btn-outline w-full'>Post</button>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default Post_Modal;
