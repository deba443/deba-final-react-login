import { HiUser } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
const Register = (props) => {
  // const nameCheck=

  // props.func(items)
  const getLocalItmes = () => {
    let list = localStorage.getItem("lists")
    // console.log(list);

    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };
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
  const [items, setItems] = useState(getLocalItmes());
  const [pswd, setPswd] = useState("");
  const [cpswd, setcPswd] = useState("");
  const [smsg, setSmsg] = useState(false);
  const [isSubmit, setSubmit] = useState(true)
  const [emailError, setEmailError] = useState(false)
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput({ ...input, [name]: value });
  // };
  const addItem = (e) => {
    e.preventDefault();
    if (!input.name.trim() || !input.password.trim() || !input.email.trim() || (!input.cpassword.trim() || !(input.password === input.cpassword)) || !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) || !(/^[A-Za-z. ]{3,30}$/i.test(input.name)) || !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(input.password))) {
      if (!input.name.trim() || !(/^[A-Za-z. ]{3,30}$/i.test(input.name))) {
        setError({ ...error, nameError: 'Please provide a valid name' })
      }
      if (!input.email.trim() || !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email))) {
        setError({ ...error, emailError: 'Please provide a valid email' })
      }
      // else{
      //   for(let i=0;i<items.length;i++){
      //     if(items[i].email==input.email){
      //       setError({...error,emailError:"email is already esists"})
      //       // break
      //     }
      //   }
      // }
      if (!input.password.trim() || !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(input.password))) {
        setError({ ...error, passwordError: 'Please provide a valid password' })
        // console.log(1)
      }
      if (!input.cpassword.trim() || !(input.password === input.cpassword)) {
        setError({ ...error, cpswdError: 'Please reenter the feild' })
      }
      // setSubmit(false)
    }
    else {
      let a;
        for(let i=0;i<items.length;i++){
          if(items[i].email==input.email){
            setError({...error,emailError:"email is already esists"})
            a=2
            break
          }
        }
        if(a==2){
          console.log(1)
          return
        }
        else{
          console.log(2)
          setItems([...items,input])
        }


    }
    setInput({
      name: "",
      password: "",
      email: "",
      cpassword: "",
    })
  }
  // useEffect(()=> {
  //   setArrFunc(items);
  //  },[]);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);
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
                              ...input, name: e.target.value
                            });
                            setError({ ...error, nameError: '' })
                          }}
                          value={input.name}
                        />
                      </div>
                      {error.nameError && <div className="text-sm text-red-600 error">{error.nameError}</div>}
                    </div>
                    <div className="content">
                      <div className="userName">
                        <MdEmail />
                        <input
                          type="text"
                          placeholder="email"
                          className="input"
                          onChange={(e) => {
                            setInput({
                              ...input, email: e.target.value
                            });
                            setError({ ...error, emailError: '' })
                          }}
                          value={input.email}
                        />
                      </div>
                      {error.emailError && <div className="text-sm text-red-600 error">{error.emailError}</div>}
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
                              ...input, password: e.target.value
                            });
                            setError({
                              ...error, passwordError: ''
                            })
                          }}
                          value={input.password}
                          // onChange={(e)=>}
                        />
                      </div>
                      {error.passwordError && <div className="text-sm text-red-600 error">{error.passwordError}</div>}
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
                            setError({ ...error, cpswdError: '' })
                          }}
                          value={input.cpassword}
                        />
                      </div>
                      {error.cpswdError && <div className="text-sm text-red-600 error">{error.cpswdError}</div>}
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  // disabled={!isSubmit}
                  // enabled={isSubmit}
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
  )
}
export default Register;