// import { Link } from "react-router-dom"
import Header from "../components/Header"
import car from "../assets/car.jpg"
import Hero from '../components/Hero';

function Home(){
    return(
        <div>
            <div style={{backgroundImage: `url(${car})`}} className="p-5 bg-center bg-cover">
                <div>
                    <Header></Header>
                    <div className="flex justify-center">
                        <Hero>Search and Compare millions of flight deals for free</Hero>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home