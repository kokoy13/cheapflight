import Input from "../components/Input"
import user from "../assets/user.png"
import mail from "../assets/mail.png"
import username from "../assets/username.png"
import password from "../assets/password.png"

function Form(){
    return(
                    <div className="flex flex-col gap-2 mb-2">
                        <div className="flex gap-5 items-center justify-between">
                            <Input classname='bg-neutral-300' img={user} name='firstname'>Firstname</Input>
                            <Input classname='bg-neutral-300' img={user} name='lastname'>Lastname</Input>
                        </div>
                        <div className="flex gap-3 items-end justify-between">
                            <Input type='email' classname='bg-neutral-300 w-[322px]' img={mail} name='email'>Email</Input>
                            <span className="mb-2">@ gmail.com</span>
                        </div>
                        <div>
                            <Input classname='bg-neutral-300 w-[430px]' img={username} name='username'>Username</Input>
                        </div>
                        <div className="flex gap-5 items-center justify-between">
                            <Input type='password' classname='bg-neutral-300' img={password} name='password'>Password</Input>
                            <Input type='password' classname='bg-neutral-300' img={password} name='confirmpassword'>Confirm Passsword</Input>
                        </div>
                    </div>
    )
}

export default Form