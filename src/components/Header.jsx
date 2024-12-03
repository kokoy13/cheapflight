import Button from "../components/Button"
import indo from "../assets/indo.png"

function Header(){
    return(
        <div className="flex justify-between">
            <h1>Cheapflights</h1>
            <div className="flex gap-3">
                <Button classname='px-5 rounded-full bg-cover bg-center w-full' bg={indo}>

                </Button>
                <Button classname='px-[10px] w-ful rounded-full bg-white hover:bg-slate-200 duration-300 transition-colors'>
                    Rp
                </Button>
                <Button classname='bg-transparent rounded-full px-6 text-white hover:text-black hover:bg-white duration-300 transition-colors'>
                    Register
                </Button>
                <Button classname='bg-yellow-400 text-white px-6 rounded-full hover:bg-yellow-500 transition-colors duration-300' href='/signin'>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Header