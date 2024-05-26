import PropTypes from 'prop-types';
import timeAgo from '../time';
import { useEffect, useState } from 'react';
import loadAuthor from '../AuthInfo';
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteComment, updateComment } from '../../../API/Comment';
const Comment = ({ comment }) => {
    const { content, created_at, author } = comment;
    const user = localStorage.getItem('user_id');
    const [Author, setAuthor] = useState({});
    const [edit,setEdit] = useState(true);
    const { dp, username } = Author;
    const [cmnt,setcomment] =useState(content);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await loadAuthor(author);
                setAuthor(userData);
            } catch (err) {
                console.log(err);
            }
        };
        if (author) {
            fetchUser();
        }
    }, [author]);
    const haldleUpdate = async(id)=>{
        const info = {
            newComment:cmnt,
            id
        }
        const response = await updateComment({info});
        if(response.status==200){
            setEdit(!edit);
        }
    }
    if (author == user) {
        return (
            <div className="chat chat-end m-0">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={dp} />
                    </div>
                </div>
                <div className="chat-header">
                    {username}
                    <time className="text-xs opacity-50 ms-1">{timeAgo(created_at)}</time>
                </div>
                <div className='flex items-center gap-1'>
                    <div className="dropdown dropdown-hover dropdown-left">
                        <div tabIndex={0} role="button"><BsThreeDotsVertical></BsThreeDotsVertical></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28">
                            <button onClick={()=>setEdit(false)}><li><a>Edit</a></li></button>
                            {
                                edit?<button onClick={()=>deleteComment(comment.id)}><li><a>Delete</a></li></button>:<button onClick={()=>haldleUpdate(comment.id)}><li><a>Save</a></li></button>
                            }
                        </ul>
                    </div>
                    
                    <div className="chat-bubble"> { edit?<h2 className='max-w-60'>{cmnt}</h2>:<textarea type="text" className='px-2  bg-transparent max-w-60' disabled={edit} onChange={(e) => setcomment(e.target.value)} defaultValue={cmnt} /> } </div>
                </div>
            </div>
        );
    }
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={dp} />
                </div>
            </div>
            <div className="chat-header">
                {username}
                <time className="text-xs opacity-50 ms-1">{timeAgo(created_at)}</time>
            </div>
            <div className="chat-bubble">{content}</div>
        </div>
    );
};
Comment.propTypes = {
    comment: PropTypes.object,
};
export default Comment;