import Button from "./Button"
import icon from "../assets/search.png"

function Search(){
    return(
        <Button classname='px-2 rounded-full cursor-pointer bg-white hover:bg-yellow-400 duration-200 ease-in transition-colors'>
            <img className="w-5" src={icon} alt="" />
        </Button>
    )
}

export default Search