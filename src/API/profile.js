import axios_base from "../Components/Axios/Axios_Base";
export const getUser = async () => {
    const token = localStorage.getItem('token');
    // const id = localStorage.getItem('user_id');
    try {
        const response = await axios_base.get('/user', {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",
            }
        });
        // console.log(response);
        return response.data.user;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const updateProfile = async (info) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios_base.patch('/user/', info, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json"
            }
        });
        console.log('Profile updated:', response);
    } catch (error) {
        console.error('prfile update:', error);
        throw error;
    }
};
export const addressupdate = async (info) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios_base.patch(`/user/address/`, info.data, {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json"
            }
        });
        console.log('Profile updated:', response);
    } catch (error) {
        console.error('prfile update:', error);
        throw error;
    }
};