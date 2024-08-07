
import { ActivityGraph } from "./ActivityGraph";
import CustomersFeedback from "./CustomersFeedback";
import Goals from "./Goals";
import NetProfit from "./NetProfit";
import RecentOrders from "./RecentOrders";
import TotalCancelled from "./TotalCancelled";
import TotalDelivered from "./TotalDelivered";
import TotalOrders from "./TotalOrders";
import TotalRevenue from "./TotalRevenue";

const Dashboard= ()=>{
    return (
        <div className="ml-20 -my-48  rounded-br-xl  md:max-h-max lg:h-[730px] bg-gray-950 text-white">
            <h1 className='mx-4'>Dashboard</h1>
            <div className=" md:flex flex-wrap my-1 lg:flex mx-4 ">
            <TotalOrders />
            <TotalDelivered />
            <TotalCancelled />
            <TotalRevenue />
            <NetProfit />
          
            </div>
            <div className="  md:my-2 mx-4 md:flex flex-wrap  lg:flex lg:mx-6">
            <ActivityGraph />
            <Goals />
            </div>
            <div className="lg:flex">
                <RecentOrders />
                <CustomersFeedback />
            </div>
           
        </div>
    )
}

export default Dashboard;