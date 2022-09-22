import { HiUser } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
const Register = (props) => {

  let login=JSON.parse(localStorage.getItem('login'))

  const [input, setInput] = useState({
    name: "",
    password: "",
    email: "",
    cpassword: "",
  });
  const [error, setError] = useState({
    nameError: "",
    passwordError: "",
    emailError: "",
    cpswdError: "",
  });

  const addItem = (e) => {
    e.preventDefault();
    login=null
    localStorage.setItem('login',JSON.stringify(login))
    if (
      !input.name.trim() ||
      !(input.name.trim().length>2) ||
      !input.password.trim() ||
      !input.email.trim() ||
      !(input.password.trim().length>4) ||
      !input.cpassword.trim() ||
      !(input.cpassword.length>4) ||
      !(input.password === input.cpassword) ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)){
      if (!input.name.trim() || !(input.name.trim().length>2)) {
        if(!input.name.trim()){
          setError({ ...error, nameError: "Please fill the name feild" });
          return
        }
        else{
          setError({ ...error, nameError: "Please enter atleast 3 character" });
          return
        }
      }
      if (
        !input.email.trim() ||
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)
      ) {
        if(!input.email.trim()){
          setError({ ...error, emailError: "Please fill the email feild" });
          return
        }
        else{
          setError({ ...error, emailError: "Please provide a valid email" });
          return
        }
      }
      if (
        !input.password.trim() || !(input.password.trim().length>4)
      ) {
        if(!input.password.trim()){
          setError({
            ...error,
            passwordError: "Please fill the password feild",
          });
          return
        }
        else{
          setError({
            ...error,
            passwordError: "Please enter atleast 5 character",
          });
          return
        }
      }
      if (!input.cpassword.trim() || !(input.password === input.cpassword) ) {
        if(!input.cpassword.trim()){
          setError({ ...error, cpswdError: "Please fill the feild" });
          return
        }
        else{
          setError({ ...error, cpswdError: "Password didn't match please enter again" });
          return
        }
      }
    } else {
        let items=JSON.parse(localStorage.getItem("lists"))
        if(items && items.length>0){
          let user=items.find((val)=>{
            return val.email===input.email
          })
          // console.log(user)
          if(!user){
            saveItems(input)
            setInput({
              name: "",
              password: "",
              email: "",
              cpassword: "",
            });
            props.cancel()
            return
          }
          else{
            setError({ ...error, emailError: "email is already esists" });
            return


          }
        }
        else{
          saveItems(input)
        }
        setInput({
          name: "",
          password: "",
          email: "",
          cpassword: "",
        });
        props.cancel()
        // close()
      

    }
  };
  const saveItems=(data)=>{
    let items=JSON.parse(localStorage.getItem('lists'));
    if(!items){
      let arr=[]
      arr.push(data)
      localStorage.setItem('lists',JSON.stringify(arr))
    }
    else{
      items.push(data)
      localStorage.setItem('lists',JSON.stringify(items))

    }
  }

  return (
    <div>
      <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h1 className="flex justify-center items-center mb-5">
                  Please sign-up to log-in
                </h1>
                <div className="flex justify-center items-center">
                  <div className="conatainer__input">
                    <div className="content">
                      <div className="userName">
                        <HiUser />
                        <input
                          type="text"
                          placeholder="username"
                          className="input"
                          onChange={(e) => {
                            setInput({
                              ...input,
                              name: e.target.value,
                            });
                            setError({ ...error, nameError: "" });
                          }}
                          value={input.name}
                        />
                      </div>
                      {error.nameError && (
                        <div className="text-sm text-red-600 error">
                          {error.nameError}
                        </div>
                      )}
                    </div>
                    <div className="content">
                      <div className="userName">
                        <MdEmail />
                        <input
                          type="email"
                          placeholder="email"
                          className="input"
                          onChange={(e) => {
                            setInput({
                              ...input,
                              email: e.target.value,
                            });
                            setError({ ...error, emailError: "" });
                          }}
                          value={input.email}
                        />
                      </div>
                      {error.emailError && (
                        <div className="text-sm text-red-600 error">
                          {error.emailError}
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
                          onChange={(e) => {
                            setInput({
                              ...input,
                              password: e.target.value,
                            });
                            setError({
                              ...error,
                              passwordError: "",
                            });
                          }}
                          value={input.password}
                          
                        />
                      </div>
                      {error.passwordError && (
                        <div className="text-sm text-red-600 error">
                          {error.passwordError}
                        </div>
                      )}
                    </div>
                    <div className="content">
                      <div className="password">
                        <RiLockPasswordFill />
                        <input
                          type="password"
                          placeholder="confirm-password"
                          className="input"
                          onChange={(e) => {
                            setInput({ ...input, cpassword: e.target.value });
                            setError({ ...error, cpswdError: "" });
                          }}
                          value={input.cpassword}
                        />
                      </div>
                      {error.cpswdError && (
                        <div className="text-sm text-red-600 error">
                          {error.cpswdError}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* This is the taliwind modal */}
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={addItem}
                >
                  Sign up
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm border-slate-400"
                  onClick={props.cancel}
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
