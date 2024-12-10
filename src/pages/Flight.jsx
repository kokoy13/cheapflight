import flight from '../assets/flight-feature.jpg'
import globe from '../assets/globe.png'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Countries from '../components/Countries'
import Footer from '../components/Footer'
import FlightOptions from '../components/FlightOptions'
import Button2 from '../components/Button2'
import Trusted from '../components/Trusted'
import Button3 from '../components/Button3'
import change from '../assets/change.png'
import Search from '../components/Search'

function Flight(){
    return(
        <div className="h-dvh overflow-y-scroll overflow-x-hidden">
            <div style={{backgroundImage: `url(${flight})`}} className="p-5 bg-center bg-cover">
                <div>
                    <Header></Header>
                    <div className="flex flex-col">
                        <Hero xcar='hover:bg-opacity-0' xflight='bg-transparent' xstay='hover:bg-opacity-0'>Find Cheap Flights from 1000s of airlines and travel agents</Hero>
                        <div className='my-5 flex flex-col gap-3 mx-40'>
                            <div className='flex justify-around'>
                                <FlightOptions rtrn='bg-yellow-400' onea='bg-white hover:bg-yellow-400 duration-200 ease-in transition-colors' mc='bg-white hover:bg-yellow-400 duration-200 ease-in transition-colors'/>
                                <Button2 text='Traveller' text2 = 'Classes'></Button2>
                            </div>
                            <div className='flex justify-around'>
                                <div className='flex gap-3'>
                                    <Button3>From</Button3>
                                    <div className='bg-neutral-800 p-3 rounded-full cursor-pointer'>
                                        <img className='w-3' src={change} alt="" />   
                                    </div>
                                    <Button3>To</Button3>
                                </div>
                                <div className='flex gap-5'>
                                    <Button3>Departure Date</Button3>
                                    <Button3>Return Date</Button3>
                                    <Search></Search>
                                </div>
                            </div>
                        </div>
                        <Trusted></Trusted>
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

export default Flight