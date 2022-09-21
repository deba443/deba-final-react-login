import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Route } from "react-router-dom";
import "./Login.css";
// import Child from './Child';
import Register from "./Register";
import Welcome from "./Welcome";

const Login = () => {
    const [open, setOpen] = useState(false)
    const[inputData,setInputData]=useState('')
    const[passwordData,setPasswordData]=useState("")
    const handleClose = () => {
        setOpen(false)
    }
    const signUpModal = (e) => {
        setOpen(true)
        e.preventDefault()
    }
    // const logInportal = (e) => {
    //     e.preventDefault()
    //     {
    //         <Route path="/welcome">
    //             <Welcome/>
    //         </Route>
    //     }

    // }
    const [arr, setArr] = useState([]);
    // const pullData=(data)=>{
    //     console.log(data)

    // }
    return (
        <div>
            <section className="main">
                {
                    open ? <Register cancel={handleClose} inputData={inputData} passwordData={passwordData} /> : null
                }

                <form action="">
                    <div className="container">
                        <div className="conatainer__input">

                            <div className="userName">
                                <HiUser />
                                <input type="text" placeholder="username" className="input" value={inputData} onChange={(e)=>{
                                    setInputData(e.target.value)
                                }}/>
                            </div>
                            <div className="password">
                                <RiLockPasswordFill />
                                <input type="password" placeholder="password" className="input"
                                value={passwordData}
                                onChange={(e)=>{
                                    setPasswordData(e.target.value)
                                }}/>

                            </div>
                        </div>
                        <div className="container__button">
                            <button className="logIn" >log in</button>
                            <div>
                                <span>Not a user?</span>
                                <span className="signUp" onClick={signUpModal}>Sign up</span>

                            </div>

                        </div>
                    </div>
                </form>
            </section>

        </div>
    )
}
export default Login