import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
function Button(props){
    const {children, classname, href = '', bg = ''} = props
    return(
        <Link to={`/${href}`} className={`${classname} font-semibold py-2 text-center`} style={{ backgroundImage: `url(${bg})` }}>
            {children}
        </Link>
    )
}

export default Button