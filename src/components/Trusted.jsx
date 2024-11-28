import booking from '../assets/booking.png'
import kayak from '../assets/kayak.png'
import opentable from '../assets/opentable.png'
import priceline from '../assets/priceline.png'

function Trusted(){
    return(
        <div className="flex gap-2 justify-center items-center mt-6">
            <span className='text-sm font-semibold'>Trusted by</span>
            <img className=' w-8' src={booking} alt="" />
            <img className=' w-8' src={kayak} alt="" />
            <img className=' w-8' src={opentable} alt="" />
            <img className=' w-8' src={priceline} alt="" />
        </div>
    )
}

export default Trusted