import LeftControls from './LeftControls';
import './Home.css';
import RightControls from './RightControls';
import { Outlet } from 'react-router-dom';
const Home = () => {
    const validUser = localStorage.getItem('isOkay');
    return (
        <div className="flex w-5/6 mx-auto">
            <div className="w-1/5 h-[95vh] sticky top-24 hide-scrollbar ">
                <LeftControls ></LeftControls>
            </div>
            <div className="w-3/5 overflow-y-auto overflow-x-hidden">
                <Outlet></Outlet>
            </div>
            <div className="w-1/5 h-[90vh] sticky top-24 ">
                {validUser && <RightControls></RightControls>}
            </div>
        </div>


    );
};

export default Home;