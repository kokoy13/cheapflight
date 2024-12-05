/* eslint-disable react/prop-types */
function Accomodation(props){
    const {background, amount, children} = props
    return(
        <div className="relative text-white flex flex-col items-center justify-center shadow-sm shadow-neutral-900 bg-center bg-cover w-52 h-52 rounded-2xl" style={{backgroundImage : `url(${background})`}}>
            <h1  className="relative shadow-sm z-20 mb-3 text-2xl font-bold">{children}</h1>
            <span className="shadow-sm text-sm italic font-semibold">{amount}+ accomodations</span>
        </div>
    )
}

export default Accomodation