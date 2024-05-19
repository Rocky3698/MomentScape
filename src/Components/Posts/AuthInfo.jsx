import axios_base from "../Axios/Axios_Base";

const token = localStorage.getItem("token");

const loadAuthor = async (id) => {
    try {
        const response = await axios_base.get(`/user/author/?author_id=${id}`, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",
            }
        });
        return response.data[0];
    } catch (error) {
        console.log(error);
    }
};

export default loadAuthor;
