import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
// import { Route } from "react-router-dom";
import "./Login.css";
// import Child from './Child';
import Register from "./Register";
import Welcome from "./Welcome";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { NumberSchema } from "yup";
import { MdEmail } from "react-icons/md";


const Login = () => {
  const item = JSON.parse(localStorage.getItem("lists"));
  const [open, setOpen] = useState(false);
  const [inputData, setInputData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [flag, setFlag] = useState(false);
  const[error,setError]=useState({
    userNameError:'',
    passwordError:''
  })
  const handleClose = () => {
    setOpen(false);
  };
  const signUpModal = (e) => {
    setOpen(true);
    e.preventDefault();
  };
  //   console.log(flag);
  const navigate = useNavigate();
  const logInportal = (e) => {
    e.preventDefault()
    let user=item.find((val)=>{
      return val.email===inputData

      
    })
    if(!user){
      setError({...error,userNameError:'No user, please register'})
      // console.log(1)
      return
    }
    if(user.password===passwordData){
      saveValue({email:inputData,password:passwordData})
      // console.log('deba')
      navigate('welcome')
      // console.log('prasad')
      // setInputData('')
      // setPasswordData('')
    }
    else{
      setError({...error,passwordError:'Invalid password'})
      return
    }


  }
  const saveValue=(data)=>{
    let arr=JSON.parse(localStorage.getItem('login'))
    if(!arr){
      // let cp=[data]
      localStorage.setItem('login',JSON.stringify(data))
    }
    else{
      let ar=null
      localStorage.setItem('login',JSON.stringify(ar))
    }
    // else{
    //   localStorage
    // }


  }
  saveValue(null)
  return (
    <div>

      <section className="main">
        {open && (
          <Register
            cancel={handleClose}
          // inputData={inputData}
          // passwordData={passwordData}
          />
        ) }

        <form action="">
          <div className="container">
            <div className="conatainer__input">
              <div className="content">
              <div className="userName">
              <MdEmail />
                <input
                  type="text"
                  placeholder="email"
                  className="input"
                  value={inputData}
                  onChange={(e) => {
                    setInputData(e.target.value);
                    setError({ ...error, userNameError: "" });
                  }}
                />
              </div>
              {error.userNameError && (
                        <div className="text-sm text-red-600 error">
                          {error.userNameError}
                        </div>
                      )}
              </div>
              <div className="content">
              <div className="password">
                <RiLockPasswordFill />
                <input
                  type="password"
                  placeholder="password"
                  className="input"
                  value={passwordData}
                  onChange={(e) => {
                    setPasswordData(e.target.value);
                    setError({ ...error, passwordError: "" });
                  }}
                />
              </div>
              {error.passwordError && (
                        <div className="text-sm text-red-600 error">
                          {error.passwordError}
                        </div>
                      )}
            </div>
            </div>
            <div className="container__button">
              <button className="logIn" onClick={logInportal}>log in</button>
              <div>
                <span>Not a user ? </span>
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
