import logo from "../assets/logo.jpg";
import message from "../assets/message.jpg";
import settings from "../assets/settings.png";
import notification from "../assets/notification.png";
import home from "../assets/home.png";
import graph from "../assets/graph.png";
import testpad from "../assets/testpad.png";
import wallet from "../assets/wallet.webp";
import bag from "../assets/bag.webp";
import Dashboard from "./Dashboard";
import logout from '../assets/logout.png';

const MainPage = () => {
  return (
    <div className=" border my-10 mx-44  sm:max-h-max  md:max-h-max lg:max-h-max bg-gray-900 rounded-xl">
      <div className="flex justify-start ">
        <div className="w-1/12">
          <img
            className="w-6 h-6  bg-blue-500 mx-4 my-3"
            src={logo}
            alt="message logo"
          />
        </div>
        <div className="w-6/12">
          <input
            className="bg-gray-800  rounded-md mx-2 my-3 text-white p-1 text-sm w-32"
            type="textBox"
            placeholder="🔍 Search"
          />
        </div>
        <div className=" w-5/12  my-4 mx-1">
         
          <div className="flex justify-end">
            <div className="mx-2">
              <img
                className="w-4 h-4 bg-transparent rounded-full bg-slate-700 "
                src={message}
                alt="message logo"
              />
            </div>
            <div className="mx-2">
              <img
                className="w-4 h-4  rounded-full  bg-slate-50 "
                src={settings}
                alt="message logo"
              />
            </div>
            <div className="mx-2">
              <img
                className="w-4 h-4  rounded-full  bg-slate-50 "
                src={notification}
                alt="message logo"
              />
            </div>
            <div className="mx-2">
              
              <img className="inline-block h-4 w-4 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
            </div>
          </div>
       
        </div>
      </div>
      <div>
        <div className=" border-l-2 border-blue-600">
          <img
            className="w-4 h-4 mx-4 my-5 bg-blue-600 rounded-full  "
            src={home}
            alt="home logo"
          />
        </div>
        <div className="">
          <img
            className="w-4 h-4 mx-4 my-5 bg-transparent rounded-full bg-slate-700 "
            src={graph}
            alt="graph logo"
          />
        </div>
        <div className="">
          <img
            className="w-4 h-4 mx-4 my-5 bg-transparent rounded-full bg-slate-700 "
            src={testpad}
            alt="testpad logo"
          />
        </div>
        <div className="">
          <img
            className="w-4 h-4 mx-4 my-5 bg-transparent rounded-full bg-slate-700 "
            src={wallet}
            alt="wallet logo"
          />
        </div>
        <div className="">
          <img
            className="w-4 h-4 mx-4 my-5 bg-transparent rounded-full bg-slate-700 "
            src={bag}
            alt="bag logo"
          />
        </div>
        
      </div>
      
      <div><Dashboard /> </div>
      <div className="">
          <img
            className="w-4 h-4 mx-4 my-28 bg-transparent rounded-full bg-slate-700 "
            src={logout}
            alt="bag logo"
          />
        </div>
    </div>
  );
};
export default MainPage;
