import goals from '../assets/goals.jpg';
import menus from '../assets/menus.jpg';
import popularDishes from '../assets/populardishes.png';

const Goals=()=>{
    return(
        <div className=" sm:my-3 sm:ml-0 w-80   bg-gray-900 lg:w-72 lg:ml-8 h-[180px] lg:my-auto rounded-xl ">
            <div className="flex  justify-between mx-4 my-4">
                <div className='flex'>
                <img className='w-8 h-8 bg-blue-300 rounded-full ' src={goals} alt="golas" />
                <h6 className='mx-4 my-2 text-sm'>Goals</h6>
                </div>
                <button className="bg-slate-600 mx-0 my-3 rounded-full w-4 h-4 text-xs"> ▷ </button>
            </div>
            <div className="flex justify-between mx-4 my-4">
            <div className='flex'>
                <img className='w-8 h-8 bg-blue-500 rounded-full' src={popularDishes} alt="Popular dishes" />
                <h6 className='mx-4 my-2 text-sm'>Popular Dishes</h6>
                </div>
                <button className="bg-slate-600 rounded-full w-4 h-4 text-xs"> ▷ </button>
           
            </div>
            <div className="flex justify-between  mx-4 my-4">
            <div className='flex'>
                <img className='w-8 h-8 bg-green-500 rounded-full' src={menus} alt="Menus" />
                <h6 className='mx-4 my-2 text-sm'>Menus</h6>
                </div>
                <button className="bg-slate-600 rounded-full w-4 h-4 text-xs"> ▷ </button>
            
            </div>
        </div>
    )
}
export default Goals;