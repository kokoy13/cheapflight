/* eslint-disable react/prop-types */
function FlightOptions(props){
    const {rtrn = 'bg-white', onea = 'bg-white', mc = 'bg-white'} = props
    return(
        <div className="text-black text-sm flex gap-5 font-medium">
            <div className={`rounded-full w-32 py-2 text-center flex items-center justify-center shadow-inner  cursor-pointer ${rtrn}`}>
                Return
            </div>
            <div className={`rounded-full w-32 py-2 text-center flex items-center justify-center shadow-inner  cursor-pointer ${onea}`}>
                One Away
            </div>
            <div className={`rounded-full w-32 py-2 text-center flex items-center justify-center shadow-inner  cursor-pointer ${mc}`}>
                Multi City
            </div>
        </div>
    )
}   

export default FlightOptions