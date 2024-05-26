import { useState, useEffect } from "react";
import axios_base from "../Axios/Axios_Base";
import FetchError from "../ErrorPage/FetchError";
import Post from "../Posts/Post/Post";
const MyPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem('user_id');
        const loadPosts = async () => {
            try {
                const response = await axios_base.get(`/post/posts/?user_id=${user_id}`, {
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
            <div className="text-center text-2xl font-bold font-mono p-3 border rounded-xl">My Posts</div>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post} ></Post>)
                }
            </div>
        </div>
    );
};

export default MyPosts;