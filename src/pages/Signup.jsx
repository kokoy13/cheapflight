import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Form from "../components/Form"
import CheckBox from "../components/CheckBox"
import Button from "../components/Button"
import Trusted from "../components/Trusted"
import CoverCar from "../assets/car-rental.jpg"

function Signup(){
    return(
            <div className="flex items-center justify-center overflow-hidden min-h-dvh min-w-dvw px-16 bg-black" style={{ fontFamily: `Inria Sans`}}>
                <Sidebar background={CoverCar}>
                    Car Rental Made Simple.
                </Sidebar>
                <div className="px-16 flex flex-col gap-1 justify-center bg-white h-dvh">
                    <div className="flex flex-col gap-3 mb-5">
                        <h1 className="text-5xl font-bold" style={{ fontFamily: `Inria Sans` }}>Create an Account</h1>
                        <h3>Already have an account? <Link to="/signin" className="text-yellow-400 underline hover:text-yellow-600 transition-colors">Sign In</Link></h3>
                    </div>
                    <Form></Form>
                    <CheckBox name='confirm'>I aggree to term and conditions</CheckBox>
                    <Button classname='rounded-lg bg-yellow-400 text-white hover:bg-yellow-600 transform transition-colors duration-200 ease-in text-xl m-1'>Sign Up</Button>
                    <h3 className="text-sm text-center">By signing up you accept our <Link to='' className="underline text-yellow-400 hover:text-yellow-600 transition-colors">term of use</Link> and <Link to='' className="underline text-yellow-400 hover:text-yellow-600 transition-colors">privacy policy</Link>.</h3>
                    <Trusted/>
                </div>
            </div>
    )
}

export default Signup