/* eslint-disable react/prop-types */
function Quote(props){
    const {children} = props
    return(
        <h1 className="mb-5 text-2xl font-semibold text-center text-white text-wrap" style={{    fontFamily:`Inknut Antiqua` }}>{children}</h1>
    )
}

export default Quote