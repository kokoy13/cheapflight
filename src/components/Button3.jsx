/* eslint-disable react/prop-types */
function Button3(props){
    const {children} = props
    return(
        <div className="font-medium text-sm rounded-full w-40 bg-white py-2 gap-5 hover:bg-yellow-400 cursor-pointer text-center duration-200 transition-colors ease-in">
            {children}
        </div>
    )
}

export default Button3