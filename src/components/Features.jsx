/* eslint-disable react/prop-types */
function Features(props){
    const {children, background} = props
    return(
        <div className="relative flex items-end justify-center bg-center bg-cover cursor-pointer w-52 h-52 rounded-2xl" style={{backgroundImage : `url(${background})`}}>
            <div className="absolute top-0 bottom-0 left-0 right-0 transition-all duration-300 ease-in bg-black bg-opacity-80 rounded-2xl hover:bg-opacity-0"></div>
            <h1 className="relative z-20 mb-5 text-xl font-bold text-white">{children}</h1>
        </div>
    )
}

export default Features