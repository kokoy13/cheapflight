/* eslint-disable react/prop-types */
import Slider from "./Slider"
import Quote from "./Quote"

function SidebarFooter(props){
    const {children} = props
    return(
            <div className="flex flex-col items-center gap-8 px-5 mb-5">
                <Quote>{children}</Quote>
                <div className="flex gap-3">
                    <Slider/>
                    <Slider background='bg-white'/>
                    <Slider/>
                </div>
            </div>
    )
}

export default SidebarFooter