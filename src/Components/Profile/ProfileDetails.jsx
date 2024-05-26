import { MdSaveAlt } from "react-icons/md";
import PropTypes from 'prop-types';
import { useState } from "react";
import { addressupdate, updateProfile } from "../../API/profile";
import MyPosts from './MyPosts';

const ProfileDetails = ({ user, edit, setProfileInfo }) => {
    const [first_name, setFrist_name] = useState(user.first_name);
    const [last_name, setLast_name] = useState(user.last_name);
    const [username, setusername] = useState(user.username);
    const [bio, setbio] = useState(user.bio);
    const [phone, setPhone] = useState(user.phone);
    const [city, setCity] = useState(user.address.city);
    const [country, setCountry] = useState(user.address.country);
    const [street_address, setstreet_address] = useState(user.address.street_address);
    const [street_number, setstreet_number] = useState(user.address.street_number);
    const [postal_code, setpostal_code] = useState(user.address.postal_code);
    const data = {
        first_name,
        last_name,
        username,
        bio,
        phone
    }
    const userAddress = {
        id: user.address.id,
        data: {
            city,
            country,
            street_address,
            street_number,
            postal_code,
        }
    }
    const update = async () => {
        setProfileInfo();
        const response = await updateProfile(data);
        const response2 = await addressupdate(userAddress);
        console.log(response2, response);
    }

    return (
        <div>
            <div className='bg-slate-300 p-16 m-5 rounded-xl'>
                <div className="flex items-center justify-between">
                    <h2 className='text-2xl font-bold font-serif'>Intro</h2>
                    {
                        edit || <button onClick={() => update()} className='flex items-center btn btn-accent'>
                            <MdSaveAlt className='text-2xl'></MdSaveAlt>
                            <h2>Save Changes</h2>
                        </button>
                    }
                </div>
                <div className='ms-4'>
                    <div className='m-3'>
                        <h2 className='font-bold text-2xl'>Bio</h2>
                        <div className='ms-4 mt-2 text-lg font-mono '>
                            <textarea name="" className='border rounded-lg p-2 bg-transparent w-full' onChange={(e) => setbio(e.target.value)} defaultValue={bio} disabled={edit} id=""></textarea>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className='m-3 bg-transparent'>
                            <h2 className='font-bold text-2xl'>General Information</h2>
                            <div className='ms-4 mt-2 text-lg font-mono'>
                                <h2>First Name: <input type="text" className='px-2 bg-transparent' onChange={(e) => setFrist_name(e.target.value)} disabled={edit} defaultValue={first_name} /></h2>
                                <h2>Last Name: <input type="text" className='px-2 bg-transparent' onChange={(e) => setLast_name(e.target.value)} disabled={edit} defaultValue={last_name} /></h2>
                                <h2>username: <input type="text" className='px-2 bg-transparent' onChange={(e) => setusername(e.target.value)} disabled={edit} defaultValue={username} /></h2>
                                <h2>Email: <input type="text" className='px-2 bg-transparent' disabled={true} defaultValue={user.email} /></h2>
                                <h2>Phone: <input type="text" className='px-2 bg-transparent' disabled={edit} onChange={(e) => setPhone(e.target.value)} defaultValue={phone} /></h2>
                                <h2>Gender:
                                    <select className='ms-3 bg-transparent' disabled={true} defaultValue={user.gender} name="" id="">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
                                </h2>
                            </div>
                        </div>

                        <div className='m-3'>
                            <h2 className='font-bold text-2xl'>Address Info:</h2>
                            <div className='ms-4 mt-2 text-lg font-mono'>
                                <h2>Country: <input type="text" className='px-2 bg-transparent' disabled={edit} defaultValue={country} onChange={(e) => setCountry(e.target.value)} /></h2>
                                <h2>City: <input type="text" className='px-2 bg-transparent' disabled={edit} onChange={(e) => setCity(e.target.value)} defaultValue={city} /></h2>
                                <h2>Street Number: <input type="text" className='px-2 bg-transparent' disabled={edit} defaultValue={street_number} onChange={(e) => setstreet_number(e.target.value)} /></h2>
                                <h2>Street Address: <input type="text" className='px-2 bg-transparent' disabled={edit} defaultValue={street_address} onChange={(e) => setstreet_address(e.target.value)} /></h2>
                                <h2>prostal Code: <input type="text" className='px-2 bg-transparent' disabled={edit} defaultValue={postal_code} onChange={(e) => setpostal_code(e.target.value)} /></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MyPosts></MyPosts>
        </div>
    );
};
ProfileDetails.propTypes = {
    user: PropTypes.object,
    edit: PropTypes.bool,
    setProfileInfo: PropTypes.func
};
export default ProfileDetails;
