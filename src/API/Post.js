import axios_base from "../Components/Axios/Axios_Base";

export const deletePost = async (id) => {
    const token = localStorage.getItem('token');
    console.log(id);
    try {
        const response = await axios_base.delete(`/post/posts/${id}/`, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json"
            }
        });
        if(response.status===204){
            window.location.reload();
        }
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const updatePost = async ({info}) => {
    const newContent ={
        content : info.newContent
    }
    const token = localStorage.getItem('token');
    try {
        const response = await axios_base.patch(`/post/posts/${info.id}/`, newContent, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json"
            }
        });
        return response;
    } catch (error) {
        console.error('comment error:', error);
        throw error;
    }
};