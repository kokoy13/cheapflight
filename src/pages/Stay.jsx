import stay from '../assets/stay.jpg'
import globe from '../assets/globe.png'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Countries from '../components/Countries'
import Footer from '../components/Footer'

function Stay(){
    return(
        <div className="h-dvh overflow-y-scroll overflow-x-hidden">
            <div style={{backgroundImage: `url(${stay})`}} className="p-5 bg-center bg-cover">
                <div>
                    <Header></Header>
                    <div className="flex justify-center">
                        <Hero xcar='hover:bg-opacity-0' xflight='hover:bg-opacity-0' xstay='bg-transparent'>Where do you Want to Stay?</Hero>
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

export default Stay