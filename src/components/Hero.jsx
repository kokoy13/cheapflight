/* eslint-disable react/prop-types */
import Quote from "./Quote"
import Features from './Features';
import car from '../assets/car-feature.jpg'
import flight from '../assets/flight.jpg'
import stay from '../assets/stay-feature.jpg'

function Hero(props){
    const {children} = props
    return(
        <div className="flex flex-col gap-5">
            <Quote>{children}</Quote>
            <div className="flex justify-center gap-5">
                <Features background={flight} target='/flight'>Flight</Features>
                <Features background={car} target='/carrental'>Car Rental</Features>
                <Features background={stay} target='/stay'>Stay</Features>
            </div>
            <div className="bg-white py-[1px] w-full"></div>
        </div>
    )
}

export default Hero