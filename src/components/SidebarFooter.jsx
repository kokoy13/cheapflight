/* eslint-disable react/prop-types */
import Slider from "./Slider"

function SidebarFooter(props){
    const {children} = props
    return(
            <div className="flex flex-col gap-8 mb-5 items-center px-5">
                <h1 className="text-white text-2xl text-center text-wrap font-semibold" style={{    fontFamily:`Inknut Antiqua` }}>{children}</h1>
                <div className="flex gap-3">
                    <Slider/>
                    <Slider background='bg-white'/>
                    <Slider/>
                </div>
            </div>
    )
}

export default SidebarFooter