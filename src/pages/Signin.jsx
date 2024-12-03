/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Form from "../components/Form"
import CheckBox from "../components/CheckBox"
import Button from "../components/Button"
import Trusted from "../components/Trusted"
import Coverflight from "../assets/flight.jpg"
import Input from "../components/Input"
import username from "../assets/username.png"
import password from "../assets/password.png"
import fb from "../assets/facebook.png"
import google from "../assets/google.png"

function Signin(props){
    return(
            <div className="flex items-center justify-center overflow-hidden min-h-dvh min-w-dvw px-16 bg-black" style={{ fontFamily: `Inria Sans`}}>
                <Sidebar background={Coverflight}>
                Find Cheap from 1000s of airlines and travel agents 
                </Sidebar>
                <div className="px-16 flex flex-col gap-1 justify-center bg-white h-dvh w-[558px]">
                    <div className="flex flex-col gap-3 mb-5">
                        <h1 className="text-5xl font-bold text-center" style={{ fontFamily: `Inria Sans` }}>Welcome Back</h1>
                        <h3 className="text-center text-wrap">Track prices, organise travel plans and access member-only deals with your Cheapflights account.</h3>
                    </div>
                    {/* <Form></Form> */}
                    <div className="flex flex-col gap-2 mb-2">
                        <div>
                            <Input classname='bg-neutral-300 w-[430px]' img={username} name='username'>Username</Input> 
                        </div>
                        <div>
                            <Input classname='bg-neutral-300 w-[430px]' img={password} name='password' type='password'>Password</Input>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <CheckBox name='confirm'>Remember for 30 days</CheckBox>
                        <Link className="text-sm text-neutral-400 mr-2 hover:underline" to={''}>
                            Forgot Password?
                        </Link>
                    </div>
                    <Button classname='rounded-lg bg-yellow-400 text-white hover:bg-yellow-600 transform transition-colors duration-200 ease-in text-xl m-1 mb-5' href='/'>Sign Up</Button>
                    <div className="flex justify-center items-center gap-2">
                        <div className="py-[0.1px] w-full bg-black"></div>
                        <h3 className="text-sm text-nowrap">or login with</h3>
                        <div className="py-[0.1px] w-full bg-black"></div>
                    </div>
                    <div className="flex justify-between px-2 gap-5 my-5">
                        <Button classname='bg-neutral-300 flex gap-2 px-2 rounded-lg w-full justify-center items-center' href='/'>
                            <img className="w-5" src={google} alt="" />
                            <h1 >Google</h1>
                        </Button>
                        <Button classname='bg-neutral-300 flex gap-2 px-2 rounded-lg w-full justify-center items-center'  href='/'>
                            <img className="w-5" src={fb} alt="" />
                            <h1>Facebook</h1>
                        </Button>
                    </div>
                    <div className="text-center text-sm">
                        <span>Dont have an account? <Link to='/signup' className="underline text-yellow-400 font-semibold">Sign Up</Link></span>
                    </div>
                    <Trusted/>
                </div>
            </div>
    )
}

export default Signin