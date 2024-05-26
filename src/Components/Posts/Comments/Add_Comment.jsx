import PropTypes from 'prop-types';
import { useState } from 'react';
import axios_base from '../../Axios/Axios_Base';
import { useNavigate } from 'react-router-dom';

const Add_Comment = ({ dp, post_id, onAddComment }) => {
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const collect_data = (e) => {
        setContent(e.target.value);
    };
    // const getComment = async () => {
    //     const token = localStorage.getItem("token");
    //     try {
    //         const response = await axios_base.get(`/post/comment/?comment_id=${id}`, {
    //             headers: {
    //                 Authorization: `Token ${token}`,
    //                 "Content-Type": "application/json",
    //             }
    //         });
    //         // console.log(response);
    //         return response.data[0].content;
    //     } catch (error) {
    //         console.log(error);
    //     }

    // };
    // const seteditComment = async () => {
    //     const comment = await getComment();
    //     console.log(comment);
    //     setContent(comment);
    // }

    const addComment = async () => {
        const token = localStorage.getItem("token");
        const author = localStorage.getItem('user_id');
        const data = {
            post: post_id,
            author: author,
            content: content
        };

        try {
            const response = await axios_base.post('/post/comment/', data, {
                headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json"
                }
            });

            if (response.status === 201) {
                const newComment = response.data;
                setContent('');
                onAddComment(newComment);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const sendComment = () => {
        const loggedIn = localStorage.getItem('isOkay');
        if (loggedIn) {
            addComment();
        } else {
            navigate('/login');
        }
    };

    return (
        <div className='flex items-center mt-3 justify-between'>
            <img alt="profile" className="w-9 rounded-full" src={dp} />
            <input required value={content} onChange={collect_data} type="text" placeholder="Leave a comment" className="input input-ghost w-full max-w-xs" />
            <button type='submit' onClick={sendComment} className='btn'>Comment</button>
        </div>
    );
};

Add_Comment.propTypes = {
    dp: PropTypes.string,
    post_id: PropTypes.number,
    onAddComment: PropTypes.func,
};

export default Add_Comment;
