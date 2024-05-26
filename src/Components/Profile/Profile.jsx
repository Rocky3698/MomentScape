
import { useState, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import ProfileDetails from './ProfileDetails';
import Header from "../Header/Header";
import axios_base from "../Axios/Axios_Base";
const Profile = () => {
    const [user, setUser] = useState({});
    const [edit, setedit] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios_base.get('/user', {
                    headers: {
                        Authorization: `Token ${token}`,
                        "Content-Type": "application/json",
                    }
                });
                setUser(response.data.user);
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }
        };
        getData();
    }, []);
    const setProfileInfo = () => {
        setedit(!edit);
    }
    return (
        <div>
            <Header></Header>
            <div className='w-4/6 mx-auto border  rounded-lg'>
                <div className='flex items-center justify-between p-8 bg-slate-400 m-5 rounded-xl'>
                    <div className='flex items-center gap-4 '>
                        <figure className='w-36 h-36'><img className='rounded-full h-full w-full object-cover' src={user.dp} alt="" /></figure>
                        <div>
                            <h2 className='text-3xl font-semibold'>{user.username}</h2>
                            <h2 className='text-xl font-mono font-semibold'>{user.first_name} {user.last_name}</h2>
                        </div>
                    </div>
                    <div className='flex items-center  text-xl gap-6'>
                        <div>
                            {edit && <button onClick={() => setProfileInfo()} className='flex items-center btn btn-primary'>
                                <FaUserEdit className='text-2xl'></FaUserEdit>
                                <h2>Edit Profile</h2>
                            </button>}
                        </div>
                    </div>
                </div>
                <div className=''>
                    {
                        user.username&&<ProfileDetails user={user} edit={edit} setProfileInfo={setProfileInfo}></ProfileDetails>
                    }
                </div>
            </div>
        </div>
    );
};
export default Profile;