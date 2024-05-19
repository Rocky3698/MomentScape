import PropTypes from 'prop-types';
import timeAgo from '../time';
import { useEffect, useState } from 'react';
import loadAuthor from '../AuthInfo';
const Comment = ({ comment }) => {
    const { content, created_at, author } = comment;
    const user = localStorage.getItem('user_id');
    const [Author, setAuthor] = useState({});
    const { dp, username } = Author;
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
                <div className="chat-bubble">{content}</div>
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