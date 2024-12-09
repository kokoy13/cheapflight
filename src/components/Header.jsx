import Button from "../components/Button"
import indo from "../assets/indo.png"
import Title from './Title'

function Header(){
    return(
        <div className="flex justify-between">
            <Title></Title>
            <div className="flex gap-3">
                <Button classname='w-full px-[22px] bg-center bg-cover rounded-full' bg={indo}>

                </Button>
                <Button classname='px-[12px] w-ful rounded-full bg-white hover:bg-slate-200 duration-300 transition-colors'>
                    Rp
                </Button>
                <Button classname='px-6 border-2 border-white text-white transition-colors duration-300 bg-transparent rounded-full hover:text-black hover:bg-white' href='signup'>
                    Register
                </Button>
                <Button classname='px-6 text-white transition-colors duration-300 bg-yellow-400 rounded-full hover:bg-yellow-500' href='signin'>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Header