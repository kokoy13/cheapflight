/* eslint-disable react/prop-types */
import Quote from "./Quote"
import Features from './Features';
import car from '../assets/car.jpg'
import flight from '../assets/flight.jpg'

function Hero(props){
    const {children} = props
    return(
        <div className="flex flex-col gap-5">
            <Quote>{children}</Quote>
            <div className="flex justify-center gap-5">
                <Features background={flight}>Flight</Features>
                <Features background={car}>Car Rental</Features>
                <Features background={car}>Stay</Features>
            </div>
        </div>
    )
}

export default Hero