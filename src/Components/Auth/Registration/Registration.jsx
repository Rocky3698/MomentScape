import { useState } from 'react';
import axios_base from '../../Axios/Axios_Base';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        gender: '',
        phone: '',
        dp: '',
        city: '',
        streetAddress: '',
        streetNumber: '',
        postalCode: '',
        country: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const address = {
            city: formData.city,
            street_address: formData.streetAddress,
            street_number: formData.streetNumber,
            postal_code: formData.postalCode,
            country: formData.country,
        };

        const data = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            first_name: formData.firstName,
            last_name: formData.lastName,
            gender: formData.gender,
            phone: formData.phone,
            dp: formData.dp,
            address: address
        };
        console.log(data);
        try {
            const response =await axios_base.post('/user/register/', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            alert('check your email');
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4 flex gap-2">
                    <div >
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div >
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div className="mb-4 flex gap-2">
                    <div className='w-56'>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            className="select select-bordered w-full"
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        name="dp"
                        placeholder="DP URL"
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleChange}
                        placeholder="Street Address"
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4 flex gap-2">
                    <div>
                        <input
                            type="text"
                            name="streetNumber"
                            value={formData.streetNumber}
                            onChange={handleChange}
                            placeholder="Street Number"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            placeholder="Postal Code"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country"
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <button type="submit" className="btn btn-primary w-full">Submit</button>
                <Link to='/login'>Already have an account ?</Link>
            </form>
        </div>
    );
};

export default RegistrationForm;
