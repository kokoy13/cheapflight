/* eslint-disable react/prop-types */
function Button(props){
    const {name, children, classname} = props
    return(
        <button className={`${classname} font-semibold py-2`} type="submit" name={name}>{children}</button>
    )
}

export default Button