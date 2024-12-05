import ps from '../assets/ps.png'
import app from '../assets/app-store.png'
import book from '../assets/booking2.png'
import kayak from '../assets/kayak2.png'
import opentab from '../assets/openbtl.png'
import agoda from '../assets/agoda.png'
import priceline from '../assets/priceline-logo.png'

function Footer(){
    return(
        <div className="fixed z-50 bg-yellow-400 py-1 flex justify-between px-5 items-center font-semibold bottom-0 w-full">
            <span className="text-sm">©2024 Cheapflights</span>
            <div className='flex gap-3 items-center'>
                <img className='w-10' src={book} alt="" />
                <img className='w-10' src={kayak} alt="" />
                <img className='w-10' src={opentab} alt="" />
                <img className='w-10' src={agoda} alt="" />
                <img className='w-12 h-4' src={priceline} alt="" />
            </div>
            <div className='flex gap-3'>
                <span className="text-sm">Get the Cheapflights app</span>
                <img className='w-5' src={app} alt="" />
                <img className='w-5' src={ps} alt="" />
            </div>
        </div>
    )
}

export default Footer