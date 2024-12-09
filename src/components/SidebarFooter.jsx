/* eslint-disable react/prop-types */
import Slider from "./Slider"
import Quote from "./Quote"

function SidebarFooter(props){
    const {children, xflight, xcar, xstay} = props
    return(
            <div className="flex flex-col items-center gap-8 px-5 mb-5">
                <Quote>{children}</Quote>
                <div className="flex gap-3">
                    <Slider background={xflight}/>
                    <Slider background={xcar}/>
                    <Slider background={xstay}/>
                </div>
            </div>
    )
}

export default SidebarFooter