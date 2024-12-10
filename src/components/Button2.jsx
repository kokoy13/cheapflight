/* eslint-disable react/prop-types */
import down from '../assets/down.png'

function Button2(props){
    const {text, text2} = props
    return (
        <div className="flex gap-5">
            <div className="font-medium rounded-full w-40 text-sm bg-white py-2 flex justify-between items-center px-5 gap-5 hover:bg-yellow-400 cursor-pointer transition-colors duration-200 ease-in" title={text}>
                <div className='flex gap-1 overflow-hidden'>
                    <span className={`ml-5text-nowrap truncate ...`}>{text}</span>
                </div>
                <img className='w-4 h-4' src={down} alt="" />
            </div>
            <div className="font-medium rounded-full w-40 text-sm bg-white py-2 flex justify-between items-center px-5 gap-5 hover:bg-yellow-400 cursor-pointer transition-colors duration-200 ease-in" title={text2}>
                <div className='flex gap-1 overflow-hidden'>
                    <span className={`ml-5text-nowrap truncate ...`}>{text2}</span>
                </div>
                <img className='w-4 h-4' src={down} alt="" />
            </div>
        </div>
    );
}

export default Button2