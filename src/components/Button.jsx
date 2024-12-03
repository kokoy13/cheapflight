import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
function Button(props){
    const {children, classname, href = ''} = props
    return(
        <Link to={`/${href}`} className={`${classname} font-semibold py-2 text-center`}>
            {children}
        </Link>
    )
}

export default Button