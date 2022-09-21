import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
// import { Route } from "react-router-dom";
import "./Login.css";
// import Child from './Child';
import Register from "./Register";
import Welcome from "./Welcome";

const Login = () => {
  const item = JSON.parse(localStorage.getItem("lists"));
  const [open, setOpen] = useState(false);
  const [inputData, setInputData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [flag, setFlag] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const signUpModal = (e) => {
    setOpen(true);
    e.preventDefault();
  };
//   console.log(flag);
  const logInportal = (e) => {
      e.preventDefault()
    //   {
    //       <Route path="/welcome">
    //           <Welcome/>
    //       </Route>
    //   }
    for(let i=0;i<item.length;i++){
        if(item[i].email==inputData){
            if(item[i].password==passwordData){
                setFlag(true)
            }
        }
      }
      console.log(flag)

  }
  //   item.forEach((e)=>{
  //     if(e.email===inputData){
  //         if(e.password==passwordData){
  //             setFlag(true)
  //         }
  //     }
  //   })

//   console.log(flag);
  return (
    <div>
      <section className="main">
        {open ? (
          <Register
            cancel={handleClose}
            // inputData={inputData}
            // passwordData={passwordData}
            open={open}
          />
        ) : null}

        <form action="">
          <div className="container">
            <div className="conatainer__input">
              <div className="userName">
                <HiUser />
                <input
                  type="text"
                  placeholder="email"
                  className="input"
                  value={inputData}
                  onChange={(e) => {
                    setInputData(e.target.value);
                  }}
                />
              </div>
              <div className="password">
                <RiLockPasswordFill />
                <input
                  type="password"
                  placeholder="password"
                  className="input"
                  value={passwordData}
                  onChange={(e) => {
                    setPasswordData(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="container__button">
              <button className="logIn" onClick={logInportal}>log in</button>
              <div>
                <span>Not a user?</span>
                <span className="signUp" onClick={signUpModal}>
                  Sign up
                </span>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};
export default Login;
