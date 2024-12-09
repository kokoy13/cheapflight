import car from '../assets/car3.jpg'
import globe from '../assets/globe.png'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Countries from '../components/Countries'
import Footer from '../components/Footer'

function CarRental(){
    return(
        <div className="h-dvh overflow-y-scroll overflow-x-hidden">
            <div style={{backgroundImage: `url(${car})`}} className="p-5 bg-center bg-cover">
                <div>
                    <Header></Header>
                    <div className="flex justify-center">
                        <Hero xcar='bg-transparent' xflight='hover:bg-opacity-0' xstay='hover:bg-opacity-0'>Car Reantal Made Simple.</Hero>
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

export default CarRental