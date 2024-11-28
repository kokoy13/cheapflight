/* eslint-disable react/prop-types */
function Label(props){
    const {children, htmlFor, img} = props
    return(
        <div className="flex gap-2 items-center mb-1 ml-2">
            <img className="w-4" src={img} />
            <label className="text-sm" htmlFor={htmlFor}>{children}</label>
        </div>
    )
}

export default Label