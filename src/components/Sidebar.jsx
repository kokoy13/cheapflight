/* eslint-disable react/prop-types */
import Button from "./Button"
import left from "../assets/left.png"
import Slider from "./Slider"

function Sidebar(props){
    const {background} = props
    return(
        <aside style={{ backgroundImage: `url(${background})`}} className='h-dvh w-1/2 flex flex-col p-5 justify-between bg-center bg-cover bg-no-repeat'>
            <header className="flex justify-between items-center">
                <h1 className="font-bold text-white text-2xl" style={{ fontFamily:`Inknut Antiqua` }}>Cheapflights</h1>
                <a href="">
                    <img src="" alt="" />
                    <Button name='back' classname='rounded-full bg-white bg-opacity-50 text-white font-bold px-3 items-center hover:scale-105 transform transition-all duration-200 flex gap-2'>
                        <img className="w-3" src={left} alt="" />
                        <span>Back to website</span>
                    </Button>
                </a>
            </header>
            <div className="flex flex-col gap-8 mb-5 items-center px-5">
                <h1 className="text-white text-2xl text-center text-wrap" style={{ fontFamily:`Inknut Antiqua` }}><span className="font-semibold">Car Rental</span> Made <span className="font-semibold">Simple.</span></h1>
                <div className="flex gap-3">
                    <Slider></Slider>
                    <Slider background='bg-white'></Slider>
                    <Slider></Slider>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar