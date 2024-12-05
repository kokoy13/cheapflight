import Button from "./Button"
import left from "../assets/left.png"
import Title from "./Title"

function SidebarHeader(){
    return(
            <header className="flex items-center justify-between">
                <Title/>                <Button name='back' classname='flex items-center gap-2 px-3 font-bold text-white transition-all duration-200 transform bg-white bg-opacity-50 rounded-full hover:scale-105'>
                    <img className="w-3" src={left}/>
                    <span>Back to website</span>
                </Button>
            </header>
    )
}

export default SidebarHeader