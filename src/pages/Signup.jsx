import { Link } from "react-router-dom"

function Signup(){
    return(
        <>
            <div className="flex overflow-hidden max-h-dvh max-w-dvw">
                
                <div className="p-5">
                    <div>
                        <h1>Create an Account</h1>
                        <h3>Already have an account? <Link to="/signin">PEPEK</Link></h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup