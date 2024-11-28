/* eslint-disable react/prop-types */
function InputBox(props){
    const {type = 'text', name, classname = ''} = props
    return(
        <input className={`${classname} px-3 py-2 rounded-lg`} type={type} name={name} id={name}/>
    )
}

export default InputBox