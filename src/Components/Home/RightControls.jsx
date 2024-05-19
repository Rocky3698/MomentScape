import Account from "./Account";
import './Home.css';
const RightControls = () => {
    const accounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return (
        <div className="w-96 ms-20">
            <p className="text-md">Follwing</p>
            <div className="h-96 overflow-y-auto hide-scrollbar">

                <div className=" flex flex-col gap-2 ms-4 mt-2">
                    {accounts.map((account) => (
                        <div key={account} className="flex ">
                            <Account key={account}></Account>
                            <button className="ms-10  btn-xs btn p-1 hover:text-red-500">Unfollow</button>
                        </div>
                    ))}
                    <p className="mx-auto">see all</p>
                </div>
            </div >

            <hr className="border-t border-gray-200 my-7" />
            <p className="text-md">Suggested accounts</p>
            <div className="h-80 overflow-y-auto hide-scrollbar">
                <div className=" flex flex-col gap-2 ms-4 mt-2">
                    {accounts.map((account) => (
                        <div key={account} className="flex ">
                            <Account key={account}></Account>
                            <button className="ms-10 text-xs btn-xs btn p-1 hover:text-indigo-500">Follow</button>
                        </div>

                    ))}
                    <p className="mx-auto">see all</p>
                </div>
            </div>

        </div>
    );
};

export default RightControls;