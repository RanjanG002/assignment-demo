import bag from '../assets/bag.webp';
const TotalDelivered =()=>{
    return (
        <div className="bg-gray-900 w-40 h-28 mx-2 py-2 rounded-lg sm:my-2">
          <button className="bg-green-800 rounded-full w-4 h-4 mx-10  mt-8 text-xs text-center">
            ✓
          </button>
    
          <img
            className="w-8 h-8 mx-4 my-2 bg-green-600 rounded-lg -mt-11 "
            src={bag}
            alt="total orders"
          />
    
          <div>
            <h3 className="text-[10px] mx-4 font-bold text-gray-300"> Total Delivereds</h3>
          </div>
          <div className="flex">
            <div className="">
              <h1 className="font-bold mx-4 my-1 text-3xl">70</h1>
            </div>
            <div className="flex my-3 mx-12">
              <h1 className="font-bold text-red-400 mx-1 my-2 text-xs">▼</h1>
              <h1 className="font-bold text-red-400  my-2 text-xs">3%</h1>
            </div>
          </div>
        </div>
      );
}
export default TotalDelivered;