import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios_base from "../../Axios/Axios_Base";
import { Link } from 'react-router-dom';


// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios_base.post('/user/login/', {
                email: email,
                password: password
            });
            console.log(response);
            if (response.data.user_id && response.data.token) {
                localStorage.setItem("user_id", response.data.user_id);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("isOkay", true);
                navigate('/')
            } else {
                console.log("Invalid credentials or error occurred");
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="w-1/6 mx-auto mb-96 mt-20">
            <form onSubmit={handleLogin}>
                <label className="flex items-center gap-2 my-2 border-b border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="grow w-full text-black py-2 my-2 bg-transparent outline-none focus:outline-none" placeholder="Email" />
                </label>
                <label className=" flex items-center gap-2 my-2 border-b border-black ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full text-black py-2 my-2 bg-transparent outline-none focus:outline-none" />
                </label>
                <button className="btn me-5" type="submit">Login</button>
                <Link className="" to="/registration">Creat new account ?</Link>
            </form>
        </div>
    );
};

export default Login;
