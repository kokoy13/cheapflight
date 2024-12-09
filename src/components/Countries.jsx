import Accomodation from "./Accomodation"
import sg from '../assets/singapore.jpg'
import korea from '../assets/korea.jpg'
import jpn from '../assets/japan.jpg'
import thai from '../assets/thailand.jpg'
import hongkong from '../assets/hongkong.jpg'
import malay from '../assets/malaysia.jpg'

function Countries(){
    return(
        <div className="flex gap-10 w-max mb-20 overflow-x-scroll whitespace-nowrap scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-300">
            <Accomodation background={sg} amount='644'>Singapore</Accomodation>
            <Accomodation background={korea} amount='15,929'>South Korea</Accomodation>
            <Accomodation background={jpn} amount='28,141'>Japan</Accomodation>
            <Accomodation background={thai} amount='27,449'>Thailand</Accomodation>
            <Accomodation background={hongkong} amount='27,449'>Hong Kong</Accomodation>
            <Accomodation background={malay} amount='8,371'>Malaysia</Accomodation>
            <Accomodation background={malay} amount='8,371'>Malaysia</Accomodation>
            <Accomodation background={malay} amount='8,371'>Malaysia</Accomodation>
        </div>

    )
}

export default Countries