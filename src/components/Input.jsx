/* eslint-disable react/prop-types */
import InputBox from "./InputBox"
import Label from "./Label"

function Input(props){
    const {children, img,  type = 'text', placeholder, name, classname } = props
    return(
        <div>
            <Label img={img} htmlFor={name}>{children}</Label>
            <InputBox classname={classname} type={type} placeholder={placeholder} name={name}/>
        </div>
    )
}

export default Input