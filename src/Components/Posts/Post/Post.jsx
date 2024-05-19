import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaThumbsUp, FaComment, FaThumbsDown } from "react-icons/fa6";
import axios_base from '../../Axios/Axios_Base';
import { useEffect } from 'react';
import timeAgo from '../time';
import { useNavigate } from 'react-router-dom';
import CommentBox from '../Comments/CommentBox';
import loadAuthor from '../AuthInfo';
import Video from '../Video';

const Post = ({ post }) => {
    const { id, image_url, video_url, content, author, created_at } = post
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [Author, setAuthor] = useState({});
    const [comments, setComments] = useState([]);
    const [reactions, setReactions] = useState({});
    const navigate = useNavigate();
    const addReact = async (react) => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user_id");
        const data = {
            "post": id,
            "user": user,
            "react_type": react
        };
        try {
            const response = await axios_base.post('/post/react/', data, {
                headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const removeReact = async () => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('user_id');
        try {
            const response = await axios_base.delete(`/post/react/delete/${id}/${userId}/`, {
                headers: {
                    'Authorization': `Token ${token}`,
                }
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };
    const updateReact = async (react) => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('user_id');
        const data = {
            "post": id,
            "user": userId,
            "react_type": react
        };
        try {
            const response = await axios_base.put(`/post/react/update/${id}/${userId}/`, data, {
                headers: {
                    'Authorization': `Token ${token}`,
                }
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
    const SetLike = () => {
        const loggedIn = localStorage.getItem('isOkay');
        if (like) {
            removeReact();
            setLike(false);
        }
        else if (dislike) {
            updateReact('like');
            setDislike(false);
            setLike(true);
        }
        else if (loggedIn) {
            setLike(true);
            setDislike(false);
            addReact("like");
        }
        else {
            navigate('/login')
        }
    }

    const SetDislike = () => {
        const loggedIn = localStorage.getItem('isOkay');
        if (dislike) {
            removeReact();
            setDislike(false);
        }
        else if (like) {
            updateReact('dislike');
            setDislike(true);
            setLike(false);
        }
        else if (loggedIn) {
            setLike(false);
            setDislike(true);
            addReact("dislike");
        }
        else {
            navigate('/login')
        }
    }
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

    useEffect(() => {
        const token = localStorage.getItem("token");
        const loadComments = async () => {
            try {
                const response = await axios_base.get(`/post/comment/?post_id=${id}`, {
                    headers: {
                        Authorization: `Token ${token}`,
                        "Content-Type": "application/json",
                    }
                });
                setComments(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        if (id) {
            loadComments();
        }
    }, [id]);
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };
    useEffect(() => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id")
        const loadSummary = async () => {
            try {
                const response = await axios_base.get(`/post/${id}/reactions/summary/${user_id}`, {
                    headers: {
                        Authorization: `Token ${token}`,
                        "Content-Type": "application/json",
                    }
                });
                setReactions(response.data);
                setLike(response.data.liked);
                setDislike(response.data.disliked);
            } catch (error) {
                console.log(error);
            }
        };
        if (user_id) {
            loadSummary();
        }
    }, [id]);

    const reaction = () => {
        let result = '';

        if (reactions.total_likes) {
            result += `${reactions.total_likes} likes`;
        }

        if (reactions.total_dislikes) {
            if (result) {
                result += ' and ';
            }
            result += `${reactions.total_dislikes} dislikes`;
        }

        return result;
    }

    return (
        <div className="card card-compact w-4/5 bg-base-100 shadow-sm mx-auto p-5 pb-0 border-0 ">
            <div className="flex justify-between">
                <div className=" flex items-center gap-3">
                    <img alt="profile" className="w-14 rounded-full" src={Author.dp} />
                    <div>
                        <h2 className="text-xl font-medium">{Author.username}</h2>
                        <small className="text-sm">{timeAgo(created_at)}</small>
                    </div>
                </div>
                <div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="m-1 mt-4 hover:bg-slate-400 rounded-lg"><BsThreeDots className="text-xl block"></BsThreeDots></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-32">
                        <li><a>Profile</a></li>
                        <li><a>Remove</a></li>
                    </ul>
                </div>
            </div>

            <div className="my-2">
                <h2 className="card-title font-medium text-md">{content}</h2>
            </div>
            {image_url && <figure><img className='' src={image_url} alt="image" /></figure>}
            {video_url && <Video videoUrl={video_url}></Video>}
            <div className="card-body">
                <div className="card-actions justify-between">
                    <div className="dropdown dropdown-hover dropdown-top">
                        <div>
                            {
                                (like == false && dislike == false) ? <button className='flex items-center gap-1 ' ><FaThumbsUp tabIndex={0} className='text-4xl outline-none focus:outline-none text-gray-500'></FaThumbsUp> {reaction()}</button> : (like ? <button className='flex items-center gap-1 ' ><FaThumbsUp tabIndex={0} className={`text-4xl outline-none focus:outline-none  ${like ? 'text-blue-500' : 'text-gray-500'}`}></FaThumbsUp> {reaction()}</button> : <button className='flex items-center gap-1 ' ><FaThumbsDown tabIndex={0} className={`text-4xl outline-none focus:outline-none  ${dislike ? 'text-red-500' : 'text-gray-500'}`}></FaThumbsDown>{reaction()}</button>)
                            }
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                            <div className='flex items-center justify-between'>
                                <button className='flex items-center gap-1 ' onClick={SetLike}><FaThumbsUp tabIndex={0} className={`text-4xl outline-none focus:outline-none  ${like ? 'text-blue-500' : 'text-gray-500'}`}></FaThumbsUp> </button>
                                <button className='flex items-center gap-1 ' onClick={SetDislike}><FaThumbsDown tabIndex={0} className={`text-4xl outline-none focus:outline-none ${dislike ? 'text-blue-500' : 'text-gray-500'}`}></FaThumbsDown></button>
                            </div>
                        </ul>
                    </div>
                    <button className='flex items-center gap-1' onClick={handleToggleCollapse}>
                        <FaComment className='text-4xl text-gray-500' />
                        {comments.length} comments
                    </button>
                </div>
                <CommentBox isCollapsed={isCollapsed} dp={Author.dp} post_id={id} initialComments={comments}></CommentBox>
            </div>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object,
    onOpenModal: PropTypes.func
};
export default Post;