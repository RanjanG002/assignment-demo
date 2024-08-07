import bag from "../assets/bag.webp";
const TotalOrders = () => {
  return (
    <div className="bg-gray-900 w-40 h-28 mx-2 py-2 rounded-lg sm:my-2">
      <button className="bg-blue-800 rounded-full w-4 h-4 mx-10  mt-8 text-xs text-center">
        +
      </button>

      <img
        className="w-8 h-8 mx-4 my-2 bg-blue-300 rounded-lg -mt-11 "
        src={bag}
        alt="total orders"
      />

      <div>
        <h3 className="text-xs mx-4 font-bold text-gray-300"> Total Orders</h3>
      </div>
      <div className="flex">
        <div className="">
          <h1 className="font-bold mx-4 my-2 text-3xl">75</h1>
        </div>
        <div className="flex my-3 mx-12">
          <h1 className="font-bold text-green-700 mx-1 my-2 text-xs">▲</h1>
          <h1 className="font-bold text-green-700  my-2 text-xs">3%</h1>
        </div>
      </div>
    </div>
  );
};

export default TotalOrders;
