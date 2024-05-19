import { Link } from "react-router-dom";
import { FaReact } from 'react-icons/fa';
const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-center align-middle">
                <FaReact className="text-6xl mx-auto"></FaReact>
                <h1 className="text-center text-4xl my-4">Opps! Page Not Found</h1>
                <Link to="/" className="btn btn-neutral">Back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;