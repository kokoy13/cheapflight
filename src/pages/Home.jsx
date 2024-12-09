// import { Link } from "react-router-dom"
import Header from "../components/Header"
import car from "../assets/car.jpg"
import Hero from '../components/Hero';
import globe from '../assets/globe.png'
import Footer from "../components/Footer";
import Countries from "../components/Countries";

function Home(){
    return(
        <div className="h-dvh overflow-y-scroll overflow-x-hidden">
            <div style={{backgroundImage: `url(${car})`}} className="p-5 bg-center bg-cover">
                <div>
                    <Header></Header>
                    <div className="flex justify-center">
                        <Hero xcar='hover:bg-opacity-0' xflight='hover:bg-opacity-0' xstay='hover:bg-opacity-0'>Search and Compare millions of flight deals for free</Hero>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 mx px-10 py-5">
                <div className="flex flex-col gap-1 px-10">
                    <div className="flex gap-2 items-center">
                        <img className="w-5 h-5" src={globe} alt="" />
                        <h1 className="text-lg font-bold">Rediscover yourself in Asia and beyond</h1>
                    </div>
                    <span className="text-sm italic text-neutral-600">Bring it yourself to heaven</span>
                </div>
                <Countries/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home