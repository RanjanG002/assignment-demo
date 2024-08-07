import CircularChart from "./CircularChart";

const NetProfit =()=>{
    return(
        <div className="sm:w-[335px] bg-gray-900 lg:w-80 h-28 mx-6 py-2 sm:mx-2 my-1  rounded-lg">
        <h6 className='text-[8px] mx-4 my-2'>Net Profit</h6>
        <h1 className='text-3xl font-bold mx-4 my-2'>$6759.25</h1>
        <div className="flex my-2 mx-4">
          <h1 className="font-bold text-green-700 mx-1 my-2 text-xs">▲</h1>
          <h1 className="font-bold text-green-700  my-2 text-xs">3%</h1>
        </div>
        <div className="mx-48 -my-28 ">
          <CircularChart />
        </div>
      </div>

    )
}
export default NetProfit;