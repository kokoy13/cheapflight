/* eslint-disable react/prop-types */
function CheckBox(props){
    const{name, children} = props
    return(
        <div className="flex gap-2 items-center ml-2">
            <input type="checkbox" name={name} id={name} />
            <label className="text-sm" htmlFor={name}>{children}</label>
        </div>
    )
}

export default CheckBox