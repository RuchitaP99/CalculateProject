import './Home.css';
import { NavLink } from "react-router-dom";
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Error from './Error';
// import { useNavigate } from "react-router-dom";
// import {useSelector} from 'react-redux'


function Home() {

    // const list = useSelector((state) =>state.reducer.list)
    return (

        <>

            <div className='chart'>
                  {/* <p>{list}</p> */}
                <div class="newtext">
             
                    <div className='btn'>
                        <button type="submit"><NavLink to="/age">AGE CALCULATOR</NavLink></button>
                    </div>

                    <div className='btn'>
                        <button type="submit" ><NavLink to="/bmi">BMI CALCULATOR</NavLink></button>
                    </div>
                </div>

            </div>
        </>
    )

}
export default Home;