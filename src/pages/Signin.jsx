import { Link } from "react-router-dom"

function Signin(){
    return(
        <>
            <div className="flex overflow-hidden max-h-dvh max-w-dvw">
                <aside>
                    <header></header>
                    <div></div>
                </aside>
                <div className="p-5">
                    <div>
                        <h1>Create an Account</h1>
                        <h3>Already have an account? <Link className="underline bg-yellow-500" to="/signup">Sign In</Link></h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin