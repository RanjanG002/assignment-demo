// import ReactTable from "react-table";
// import "react-table/react-table.css";

const RecentOrders = () => {
  const data = [
    {
      avathar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Wade Warren",
      orderNo: 15478256,
      amount: "$124.00",
      status: "Delivered",
    },
    {
      avathar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Jane Cooper ",
      orderNo: 48965786,
      amount: "$365.02",
      status: "Delivered",
    },
    {
      avathar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      name: "Guy Hawkins",
      orderNo: 78958215,
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      avathar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Kristin Watson",
      orderNo: 20965732,
      amount: "$65.00",
      status: "Pending",
    },
    {
      avathar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Cody Fisher",
      orderNo: 95715620,
      amount: "$545.00",
      status: "Delivered",
    },
    {
      avathar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Savannah Nguyen",
      orderNo: 78514568,
      amount: "$128.20",
      status: "Delivered",
    },
  ];

  return (
    <div className=" sm:w-[330px] mx-4 md:mx-4 md:w-[550px] lg:mx-5 lg:w-[680px] bg-gray-900 rounded-xl">
      <h5 className="mx-4">Recent Orders</h5>
      <table className="">
        <thead>
        <tr className="">
          <th className=" px-3 py-1 text-[6px] sm:px-5 sm:py-2 sm:text-[8px] md:px-2 md:py:1 md:text-[10px] lg:px-10 lg:py-2 lg:text-[12px]">Customer</th>
          <th className=" px-3 py-1 text-[6px] sm:px-5 sm:py-2 sm:text-[8px] md:px-2 md:py:1 md:text-[10px] lg:px-10 lg:py-2 lg:text-[12px]">Order No</th>
          <th className=" px-3 py-1 text-[6px] sm:px-5 sm:py-2 sm:text-[8px] md:px-2 md:py:1 md:text-[10px] lg:px-10 lg:py-2 lg:text-[12px]">Amount</th>
          <th className=" px-3 py-1 text-[6px] sm:px-5 sm:py-2 sm:text-[8px] md:px-2 md:py:1 md:text-[10px] lg:px-10 lg:py-2 lg:text-[12px]">Status</th>
        </tr>
        </thead>
        {data.map((val, key) => {
          return (<tbody key={key}>
            <tr className=" border-t-[1px] " key={key}>
              <td className="flex px-2 py-2 text-[4px] sm:flex sm:px-3 sm:py-2 sm:text-[6px] md:flex md:px-5 md:py-2 md:text-[8px] lg:flex  lg:px-10 lg:py-2  lg:text-[10px]">
                <img
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h6 lg:w-8 lg:h-8   rounded-full"
                  src={val.avathar}
                  alt={val.name}
                />{" "}
                {val.name}
              </td>
              
              <td className="px-4 py-1 text-[4px] sm:px-6 sm:py-1 sm:text-[6px] md:px-8 md:py-1 md:text-[8px] lg:px-10 lg:py-1 lg:text-[10px] ">{val.orderNo}</td>
              <td className=" px-4 py-1 text-[4px] sm:px-6 sm:py-1 sm:text-[6px] md:px-8 md:py-1 md:text-[8px] lg:px-10 lg:py-1 lg:text-[10px] ">{val.amount}</td>
              {val.status === 'Delivered' ?<td className=" px-4 py-1 text-[4px] sm:px-6 sm:py-1 sm:text-[6px] md:px-8 md:py-1 md:text-[8px] lg:px-10 lg:py-1 lg:text-[10px]   bg-green-500 w-5 rounded-2xl h-[1px]">
                {val.status}
              </td>:<td className=" px-4 py-1 text-[4px] sm:px-6 sm:py-1 sm:text-[6px] md:px-8 md:py-1 md:text-[8px] lg:px-10 lg:py-1 lg:text-[10px]   bg-red-500 w-5 rounded-2xl h-[1px]">
                {val.status}
              </td>}
            </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
export default RecentOrders;
