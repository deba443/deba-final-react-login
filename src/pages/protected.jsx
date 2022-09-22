import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Protected=(props)=>{
    const {Component}=props
    const navigate=useNavigate();
    let login=JSON.parse(localStorage.getItem('login'))
    const[state,setState]=useState(login)
    useEffect(()=>{
        // let login=JSON.parse(localStorage.getItem('login'))
        if(!state){
            navigate('/')
        }
    })

    return(
        <div>
            <h1>hey</h1>
            <Component/>

        </div>
    )
}
export default Protected;