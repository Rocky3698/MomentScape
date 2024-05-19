import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { TfiFaceSad } from "react-icons/tfi";
const FetchError = ({ err }) => {
    console.log(err);
    const handleReload = () => {
        window.location.reload();
    };
    return (

        <div className=" w-96 mx-auto my-16 h-screen">
            <div className="flex flex-col justify-center align-middle">
                <TfiFaceSad className="text-6xl mx-auto"></TfiFaceSad>
                <h1 className="text-center text-xl">{err.code}</h1>
                <h1 className="text-center text-2xl my-1">{err.message}</h1>
                <Link onClick={handleReload} to="/" className="btn btn-neutral">Reload page</Link>
            </div>
        </div>
    );
};
FetchError.propTypes = {
    err: PropTypes.object,
};
export default FetchError;