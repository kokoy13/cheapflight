import Button from "./Button"
import left from "../assets/left.png"

function SidebarHeader(){
    return(
            <header className="flex justify-between items-center">
                <h1 className="font-bold text-white text-2xl" style={{ fontFamily:`Inknut Antiqua` }}>Cheapflights</h1>
                <Button name='back' classname='rounded-full bg-white bg-opacity-50 text-white font-bold px-3 items-center hover:scale-105 transform transition-all duration-200 flex gap-2'>
                    <img className="w-3" src={left}/>
                    <span>Back to website</span>
                </Button>
            </header>
    )
}

export default SidebarHeader