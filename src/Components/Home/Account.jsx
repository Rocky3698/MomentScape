import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <img alt="profile" className="rounded-full border-accent border-solid border-2 w-10" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                <div className='flex flex-col gap-0'>
                    <Link to="/" className='hover:text-blue-400 hover:underline underline-offset-4 block'>Rocky20809</Link>
                    <small className='text-slate-500'>Rocky chowdhury</small>
                </div>
            </div>
        </div>
    );
};
Account.propTypes = {
    account: PropTypes.number,
}
export default Account;