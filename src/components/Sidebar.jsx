/* eslint-disable react/prop-types */
import SidebarFooter from "./SidebarFooter"
import SidebarHeader from "./SidebarHeader"

function Sidebar(props){
    const {background, children, xflight, xcar, xstay} = props
    return(
        <aside style={{ backgroundImage: `url(${background})`}} className='h-dvh w-1/2 flex flex-col p-5 justify-between bg-center bg-cover bg-no-repeat'>
            <SidebarHeader/>
            <SidebarFooter xflight={xflight} xcar={xcar} xstay={xstay}>{children}</SidebarFooter>
        </aside>
    )
}

export default Sidebar