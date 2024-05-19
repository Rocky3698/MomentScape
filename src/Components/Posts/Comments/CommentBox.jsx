import PropTypes from 'prop-types';
import Comment from './Comment';
import Add_Comment from './Add_Comment';
import { useState, useEffect } from 'react';

const CommentBox = ({ isCollapsed, initialComments = [], dp, post_id }) => {
    const [comments, setComments] = useState(initialComments);

    useEffect(() => {
        setComments(initialComments);
    }, [initialComments]);

    const handleAddComment = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment]);
    };

    return (
        <div className={`collapse ${isCollapsed ? 'hidden' : ''}`}>
            <div className="collapse-title text-xl">
                {comments.length ? <hr className="border-t border-gray-200 mb-4" /> : ""}
                <div className='flex flex-col max-h-80 overflow-y-auto hide-scrollbar'>
                    {
                        comments.map((comment, idx) => <Comment key={idx} comment={comment} />)
                    }
                </div>
                <div>
                    <Add_Comment onAddComment={handleAddComment} dp={dp} post_id={post_id} />
                </div>
            </div>
        </div>
    );
};

CommentBox.propTypes = {
    isCollapsed: PropTypes.bool,
    initialComments: PropTypes.array,
    dp: PropTypes.string,
    post_id: PropTypes.number
};

export default CommentBox;
