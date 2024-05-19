import Post from './Post/Post';
import { useEffect, useState } from "react";
import axios_base from '../Axios/Axios_Base';
import FetchError from '../ErrorPage/FetchError';
const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const login = localStorage.getItem('isOkay');
        const loadPosts = async () => {
            try {
                const response = await axios_base.get(`${login ? '/post/posts/' : '/post/public/'}`, {
                    headers: {
                        Authorization: `Token ${token}`,
                        "Content-Type": "application/json",
                    }
                });
                setPosts(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        loadPosts();
    }, [])

    if (loading) {
        return (
            <div className=" w-6 mx-auto my-16 h-screen">
                <div className="flex flex-col justify-center align-middle">
                    <span className="loading loading-dots loading-lg"></span>
                    <h2>Loading...</h2>
                </div>
            </div>
        );
    }

    if (error) {
        return <FetchError err={error}></FetchError>
    }
    return (
        <div className="w-5/6 mx-auto flex flex-col gap-5">
            {
                posts.map(post => <Post key={post.id} post={post} ></Post>)
            }
        </div>
    );
};

export default Posts;