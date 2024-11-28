/* eslint-disable react/prop-types */
function Slider(props){
    const {background = 'bg-neutral-400'} = props
    return(
        <div className={`px-10 py-[4px] ${background} rounded-full cursor-pointer`}></div>
    )
}

export default Slider