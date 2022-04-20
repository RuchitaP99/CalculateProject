// import BMI from "./Home/BMI"

import { NavLink } from "react-router-dom"
import {useState} from 'react'
import {useDispatch} from "react-redux"
import {showData} from '../../actions/index';
function Info(){
    const [show , setShow] = useState("");
    const dispatch = useDispatch()
    return(
        <div>
             <label>Enter your name</label>
                    <input className='rohit' type="text" 
                    value={show}
                    onChange={(e) =>setShow(e.target.value)} ></input>
                    <br></br>
                    <button className='ram' onClick={() =>dispatch(showData(show))}><NavLink to="/home">Submit</NavLink></button>
        </div>
    )
}
export default Info